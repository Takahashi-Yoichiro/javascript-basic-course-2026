export function resize1(params) {
  const maxWidth = (params && params.maxWidth) || 600;
  const maxHeight = (params && params.maxHeight) || 480;
  console.log({ maxWidth, maxHeight });
}

export function resize2(params) {
  const maxWidth =
    params?.maxWidth == null
      ? 600
      : params.maxWidth === 0
        ? 600
        : params.maxWidth;

  const maxHeight =
    params?.maxHeight == null
      ? 480
      : params.maxHeight === 0
        ? 480
        : params.maxHeight;

  console.log({ maxWidth, maxHeight });
}

function main() {
  resize1({ maxWidth: 800 });
  resize2({ maxHeight: 600 });
}
main();
