const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const WIDTH = 800;
    const HEIGHT = 600;
    const title = "Numpuz";
    const FPS = 60;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, title);
    r.SetTargetFPS(FPS);

    const screen = { WIDTH, HEIGHT };

    return { screen };
}

function update(world) { }

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.GRAY);



    r.EndDrawing();
}

function teardown() {
    r.CloseWindow()
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
}