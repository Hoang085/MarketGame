# Dung 4 dang lo thuy tinh cho Hanh Trinh Sac Mau, kich thuoc khop SHAPES trong
# docs/concepts/hanh-trinh-sac-mau/tranh-lo.js (1 px mockup = 1 cm).
# Chay: blender -b --factory-startup -P tools/blender/lo-thuy-tinh.py -- <thu muc ra> <thu muc tranh>
# Ra: lo-<dang>.glb / .fbx (than kinh + loi tranh co UV chieu chinh dien) va preview.png
import bpy, math, os, sys

OUT, TRANH = (sys.argv[sys.argv.index("--") + 1:] + ["", ""])[:2] if "--" in sys.argv else ("", "")
U = 0.01  # px -> m
SEG = 64
WALL = 1.6  # do day thanh kinh (px)


def sph(z, c, r):
    d = r * r - (z - c) ** 2
    return math.sqrt(d) if d > 0 else 0.0


def band(z, a, b, r):
    return r if a <= z <= b else 0.0


def jar_body(z):
    if not 0 <= z <= 80:
        return 0.0
    dz = max(16 - z, z - 64, 0)
    return 17 + math.sqrt(max(0.0, 256 - dz * dz))


# Moi dang: w, h cua than (khop tranh-lo.js), ban kinh theo z, chieu cao mieng, ban kinh vanh
SHAPES = {
    "bottle": dict(w=76, h=76, top=98, lip=13, r=lambda z: max(sph(z, 38, 38), band(z, 60, 98, 11))),
    "gourd": dict(w=66, h=99, top=104, lip=11, r=lambda z: max(sph(z, 32, 33), sph(z, 78, 21), band(z, 80, 104, 8))),
    "jar": dict(w=66, h=80, top=92, lip=27, r=lambda z: max(jar_body(z), band(z, 70, 92, 25))),
    "lantern": dict(w=72, h=88, top=98, lip=14, r=lambda z: max(36 * math.sqrt(max(0.0, 1 - ((z - 44) / 44) ** 2)), band(z, 80, 98, 12))),
}
# Tranh mau cho anh xem thu
PREVIEW = {"bottle": "bai-cat", "gourd": "mui-ne", "jar": "hoang-hon", "lantern": "thuyen-do"}


def profile(f, z0, z1, step=0.5):
    pts, z = [], z0
    while z <= z1 + 1e-6:
        pts.append((max(f(z), 0.6), z))
        z += step
    return pts


def lathe(name, pts, cap_bottom=True, cap_top=False, uv_box=None):
    verts, faces = [], []
    for r, z in pts:
        for i in range(SEG):
            a = 2 * math.pi * i / SEG
            verts.append((r * math.cos(a) * U, r * math.sin(a) * U, z * U))
    n = len(pts)
    for j in range(n - 1):
        for i in range(SEG):
            a, b = j * SEG + i, j * SEG + (i + 1) % SEG
            faces.append((a, b, b + SEG, a + SEG))
    if cap_bottom:
        verts.append((0, 0, pts[0][1] * U)); c = len(verts) - 1
        faces += [(c, (i + 1) % SEG, i) for i in range(SEG)]
    if cap_top:
        verts.append((0, 0, pts[-1][1] * U)); c = len(verts) - 1
        base = (n - 1) * SEG
        faces += [(c, base + i, base + (i + 1) % SEG) for i in range(SEG)]
    me = bpy.data.meshes.new(name)
    me.from_pydata(verts, [], faces)
    if uv_box:  # chieu chinh dien (truc -Y), "cover" nhu tranh-lo.js
        w, h = uv_box
        S = max(w, h)
        uv = me.uv_layers.new(name="UVMap")
        for poly in me.polygons:
            for li in poly.loop_indices:
                x, _, z = me.vertices[me.loops[li].vertex_index].co
                uv.data[li].uv = ((x / U + S / 2) / S, (z / U + (S - h) / 2) / S)
    me.validate()
    for p in me.polygons:
        p.use_smooth = True
    ob = bpy.data.objects.new(name, me)
    bpy.context.collection.objects.link(ob)
    return ob


def glass_mat():
    m = bpy.data.materials.new("kinh")
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = (0.93, 0.92, 1.0, 1)
    b.inputs["Transmission Weight"].default_value = 1.0
    b.inputs["Roughness"].default_value = 0.04
    b.inputs["IOR"].default_value = 1.35
    b.inputs["Coat Weight"].default_value = 0.5
    return m


def rim_mat():
    m = bpy.data.materials.new("vanh")
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = (0.95, 0.94, 1.0, 1)
    b.inputs["Roughness"].default_value = 0.15
    b.inputs["Coat Weight"].default_value = 1.0
    return m


def picture_mat(pic):
    m = bpy.data.materials.new("tranh-" + pic)
    nt = m.node_tree
    b = nt.nodes["Principled BSDF"]
    tex = nt.nodes.new("ShaderNodeTexImage")
    tex.image = bpy.data.images.load(os.path.join(TRANH, pic + ".png"))
    tex.interpolation = "Closest"  # giu hat pixel nhu cat
    nt.links.new(tex.outputs["Color"], b.inputs["Base Color"])
    nt.links.new(tex.outputs["Color"], b.inputs["Emission Color"])
    b.inputs["Emission Strength"].default_value = 0.25
    b.inputs["Roughness"].default_value = 0.85
    return m


def build(shape, pic, x):
    s = SHAPES[shape]
    col = bpy.data.collections.new("lo-" + shape)
    bpy.context.scene.collection.children.link(col)
    prev = bpy.context.view_layer.active_layer_collection
    bpy.context.view_layer.active_layer_collection = bpy.context.view_layer.layer_collection.children[col.name]

    glass = lathe("lo-" + shape, profile(s["r"], 0, s["top"]))
    sol = glass.modifiers.new("day", "SOLIDIFY"); sol.thickness = WALL * U; sol.offset = 1
    glass.data.materials.append(glass_mat())

    bpy.ops.mesh.primitive_torus_add(major_radius=s["lip"] * U, minor_radius=2.2 * U, major_segments=SEG, minor_segments=12,
                                     location=(0, 0, s["top"] * U))
    lip = bpy.context.active_object; lip.name = "vanh-" + shape
    lip.data.materials.append(rim_mat())
    for p in lip.data.polygons:
        p.use_smooth = True

    # loi tranh: than lo thu vao trong thanh kinh, chi phan than (0..h)
    inner = lathe("tranh-" + shape, profile(lambda z: s["r"](z) - WALL - 0.4, 1.0, s["h"] - 1.0), cap_top=True, uv_box=(s["w"], s["h"]))
    inner.data.materials.append(picture_mat(pic))

    bpy.context.view_layer.active_layer_collection = prev
    objs = [glass, lip, inner]
    for o in objs:
        o.select_set(False)
    return col, objs


def main():
    os.makedirs(OUT, exist_ok=True)
    bpy.ops.wm.read_factory_settings(use_empty=True)
    sc = bpy.context.scene

    # Xuat tung lo (o goc toa do, day lo tai z = 0)
    for shape in SHAPES:
        col, objs = build(shape, PREVIEW[shape], 0)
        bpy.ops.object.select_all(action="DESELECT")
        for o in objs:
            o.select_set(True)
        bpy.context.view_layer.objects.active = objs[0]
        bpy.ops.export_scene.gltf(filepath=os.path.join(OUT, f"lo-{shape}.glb"), use_selection=True, export_apply=True)
        bpy.ops.export_scene.fbx(filepath=os.path.join(OUT, f"lo-{shape}.fbx"), use_selection=True, apply_scale_options="FBX_SCALE_UNITS",
                                 path_mode="COPY", embed_textures=True)
        # dat lo canh nhau cho anh xem thu: hang tren co tranh, hang duoi lo rong
        i = list(SHAPES).index(shape)
        for o in objs:
            o.location.x += (i - 1.5) * 1.05
            o.location.y += -0.25
        for o in objs[:2]:
            d = o.copy(); d.data = o.data; col.objects.link(d)
            d.location.y += 0.5; d.location.x += 0.0; d.location.z += 0
            d["empty"] = True

    # Hang lo rong dat phia sau: day ra sau va len cao 1 chut de camera nghieng thay ca 2 hang
    for o in sc.objects:
        if o.get("empty"):
            o.location.y += 0.9

    # Nen tim + anh sang
    world = bpy.data.worlds.new("nen"); sc.world = world
    world.use_nodes = True
    world.node_tree.nodes["Background"].inputs["Color"].default_value = (0.13, 0.06, 0.36, 1)
    world.node_tree.nodes["Background"].inputs["Strength"].default_value = 0.8
    bpy.ops.mesh.primitive_plane_add(size=20, location=(0, 0, -0.001))
    floor = bpy.context.active_object
    fm = bpy.data.materials.new("san"); fb = fm.node_tree.nodes["Principled BSDF"]
    fb.inputs["Base Color"].default_value = (0.2, 0.1, 0.5, 1); fb.inputs["Roughness"].default_value = 0.6
    floor.data.materials.append(fm)


    def light(name, kind, loc, rot, energy, size=1.0, color=(1, 1, 1)):
        ld = bpy.data.lights.new(name, kind); ld.energy = energy; ld.color = color
        if kind == "AREA":
            ld.shape = "DISK"; ld.size = size
        lo = bpy.data.objects.new(name, ld); sc.collection.objects.link(lo)
        lo.location = loc; lo.rotation_euler = [math.radians(a) for a in rot]


    light("key", "AREA", (-2.0, -3.0, 3.5), (50, 0, -30), 900, 3.0)
    light("rim", "AREA", (2.5, 3.0, 2.5), (-60, 0, 140), 700, 2.0, (0.8, 0.75, 1.0))
    light("fill", "AREA", (0, -4, 0.8), (85, 0, 0), 250, 4.0, (1.0, 0.9, 1.0))

    cam = bpy.data.objects.new("cam", bpy.data.cameras.new("cam")); sc.collection.objects.link(cam)
    cam.data.type = "ORTHO"; cam.data.ortho_scale = 4.6
    cam.location = (0, -6, 3.6); cam.rotation_euler = (math.radians(65), 0, 0)
    sc.camera = cam

    sc.render.engine = "CYCLES"
    sc.cycles.samples = 96
    sc.cycles.use_denoising = True
    sc.cycles.max_bounces = 16; sc.cycles.transmission_bounces = 16
    sc.view_settings.view_transform = "Standard"
    sc.render.resolution_x, sc.render.resolution_y = 1600, 1000
    sc.render.filepath = os.path.join(OUT, "preview.png")
    bpy.ops.render.render(write_still=True)
    print("LO_OK")


if __name__ == "__main__":
    main()
