# Vector space adventure

This is a simple exploration of WebGPU applied to visualization of vector fields.

It allows you to control a spaceship and fly in a vector space. When you press the left mouse button
new lines are emitted at the crosshair's coordinates and the vector field simulates the movement of
those lines.

Entire computation is done on the GPU using compute shaders.

Note: WebGPU is supported only by the latest version of Chrome and Edge.

## Controls

- `WASD` - move the spaceship
- `Shift` - move up
- `Space` - move down
- `Mouse` - look around. When pointer is locked, hit `ESC` to unlock it.

## Support

Don't hesitate to reach out with any questions either here or on [twitter](https://twitter.com/anvaka).

If you like this project, consider [supporting it](https://github.com/sponsors/anvaka). Thank you!

## License

MIT