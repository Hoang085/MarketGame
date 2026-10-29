# Render moi dang lo thanh 3 lop anh 2D de ghep trong game (camera co dinh):
#   lo-<dang>-sau.png    than kinh (ca 2 thanh), nen trong suot -> ve duoi cat
#   lo-<dang>-truoc.png  chi vet sang mat truoc + vanh mieng -> ve tren cat
#   lo-<dang>-mat-na.png hinh loi cat (trang) -> mat na cat tranh
# va layers.json: diem goc (day lo, giua) theo pixel + so pixel / cm de dat tranh dung cho.
# Chay: blender -b --factory-startup -P tools/blender/lo-2d-layers.py -- <thu muc ra> <thu muc tranh>
import bpy, math, os, sys, json, importlib.util
from bpy_extras.object_utils import world_to_camera_view

HERE = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location("lo3d", os.path.join(HERE, "lo-thuy-tinh.py"))
lo3d = importlib.util.module_from_spec(spec); spec.loader.exec_module(lo3d)

OUT, TRANH = sys.argv[sys.argv.index("--") + 1:][:2]
lo3d.TRANH = TRANH
os.makedirs(OUT, exist_ok=True)
U = lo3d.U
PX = 5          # pixel / cm
TILT = 10       # camera nhin xuong 10 do (goc nhin game)
PAD = 8         # le quanh lo (cm)


def highlight_mat():
    # chi phan xa o mat truoc, con lai trong suot
    m = bpy.data.materials.new("vet-sang"); nt = m.node_tree; nt.nodes.clear()
    out = nt.nodes.new("ShaderNodeOutputMaterial")
    mix = nt.nodes.new("ShaderNodeMixShader"); mix2 = nt.nodes.new("ShaderNodeMixShader")
    tr = nt.nodes.new("ShaderNodeBsdfTransparent")
    gl = nt.nodes.new("ShaderNodeBsdfGlossy"); gl.inputs["Roughness"].default_value = 0.06
    fr = nt.nodes.new("ShaderNodeFresnel"); fr.inputs["IOR"].default_value = 1.5
    geo = nt.nodes.new("ShaderNodeNewGeometry")
    nt.links.new(fr.outputs[0], mix.inputs[0]); nt.links.new(tr.outputs[0], mix.inputs[1]); nt.links.new(gl.outputs[0], mix.inputs[2])
    nt.links.new(geo.outputs["Backfacing"], mix2.inputs[0]); nt.links.new(mix.outputs[0], mix2.inputs[1]); nt.links.new(tr.outputs[0], mix2.inputs[2])
    nt.links.new(mix2.outputs[0], out.inputs[0])
    return m


def white_mat():
    m = bpy.data.materials.new("mat-na"); nt = m.node_tree; nt.nodes.clear()
    out = nt.nodes.new("ShaderNodeOutputMaterial"); em = nt.nodes.new("ShaderNodeEmission")
    em.inputs["Color"].default_value = (1, 1, 1, 1); nt.links.new(em.outputs[0], out.inputs[0])
    return m


def setup_scene():
    sc = bpy.context.scene
    world = bpy.data.worlds.new("nen"); sc.world = world
    world.use_nodes = True
    world.node_tree.nodes["Background"].inputs["Color"].default_value = (0.13, 0.06, 0.36, 1)
    world.node_tree.nodes["Background"].inputs["Strength"].default_value = 0.6
    for name, loc, rot, e, size, col in [
        ("key", (-2.0, -3.0, 3.5), (50, 0, -30), 900, 1.2, (1, 1, 1)),
        ("rim", (2.5, 3.0, 2.5), (-60, 0, 140), 700, 2.0, (0.8, 0.75, 1.0)),
        ("fill", (0, -4, 0.8), (85, 0, 0), 250, 4.0, (1.0, 0.9, 1.0)),
    ]:
        ld = bpy.data.lights.new(name, "AREA"); ld.energy = e; ld.color = col; ld.shape = "DISK"; ld.size = size
        lo = bpy.data.objects.new(name, ld); sc.collection.objects.link(lo)
        lo.location = loc; lo.rotation_euler = [math.radians(a) for a in rot]
        lo.visible_glossy = name != "fill"  # den phu khong tao vet sang to giua lo
    sc.render.engine = "CYCLES"
    sc.cycles.samples = 64; sc.cycles.use_denoising = True
    sc.cycles.max_bounces = 16; sc.cycles.transmission_bounces = 16
    sc.render.film_transparent = True
    sc.cycles.film_transparent_glass = True
    sc.view_settings.view_transform = "Standard"
    sc.render.image_settings.file_format = "PNG"; sc.render.image_settings.color_mode = "RGBA"
    return sc


def render(sc, path):
    sc.render.filepath = path
    bpy.ops.render.render(write_still=True)


meta = {}
for shape, s in lo3d.SHAPES.items():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    sc = setup_scene()
    col, (glass, lip, inner) = lo3d.build(shape, "bai-cat", 0)

    # camera truc giao, nghieng TILT do, khung om tron lo
    wcm, z0, z1 = s["w"] + 2 * PAD, -PAD, s["top"] + PAD
    hcm = z1 - z0
    sc.render.resolution_x, sc.render.resolution_y = round(wcm * PX), round(hcm * PX)
    cam = bpy.data.objects.new("cam", bpy.data.cameras.new("cam")); sc.collection.objects.link(cam)
    cam.data.type = "ORTHO"; cam.data.ortho_scale = max(wcm, hcm) * U
    th = math.radians(90 - TILT)
    cam.rotation_euler = (th, 0, 0)
    d = (0, math.sin(th), -math.cos(th))
    tgt = (0, 0, (z0 + z1) / 2 * U)
    cam.location = tuple(tgt[i] - d[i] * 5 for i in range(3))
    sc.camera = cam
    bpy.context.view_layer.update()

    def px(x, y, z):
        v = world_to_camera_view(sc, cam, __import__("mathutils").Vector((x * U, y * U, z * U)))
        return [v.x * sc.render.resolution_x, (1 - v.y) * sc.render.resolution_y]

    base = px(0, 0, 0)
    meta[shape] = dict(
        w=s["w"], h=s["h"], size=[sc.render.resolution_x, sc.render.resolution_y],
        anchor=base,                               # pixel cua tam day lo
        sx=px(10, 0, 0)[0] / 10 - base[0] / 10,    # pixel / cm theo ngang
        sy=(base[1] - px(0, 0, 10)[1]) / 10,       # pixel / cm theo chieu cao (da nhan cos TILT)
        top=px(0, 0, s["top"]),                    # tam mieng lo
    )

    # 1. kinh sau: than kinh, an loi va vanh
    inner.hide_render = True; lip.hide_render = True
    render(sc, os.path.join(OUT, f"lo-{shape}-sau.png"))
    # 2. kinh truoc: vet sang mat truoc + vanh
    glass.data.materials[0] = highlight_mat(); lip.hide_render = False
    render(sc, os.path.join(OUT, f"lo-{shape}-truoc.png"))
    # 3. mat na loi cat
    glass.hide_render = True; lip.hide_render = True; inner.hide_render = False
    inner.data.materials[0] = white_mat()
    sc.cycles.samples = 16
    render(sc, os.path.join(OUT, f"lo-{shape}-mat-na.png"))

with open(os.path.join(OUT, "layers.json"), "w", encoding="utf-8") as f:
    json.dump(dict(px_per_cm=PX, tilt=TILT, shapes=meta), f, indent=1)
print("LAYERS_OK")
