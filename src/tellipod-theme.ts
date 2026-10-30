// Dark-mode artwork lives in src/assets/tellipod/dark/ under the same file name as
// the light one. To restyle an asset for dark mode, replace the file there; to add one,
// drop it in with a matching name and use `themed()` where the light asset is rendered.
const light = import.meta.glob<ImageMetadata>('./assets/tellipod/*.svg', {
  eager: true,
  import: 'default',
});
const dark = import.meta.glob<ImageMetadata>('./assets/tellipod/dark/*.svg', {
  eager: true,
  import: 'default',
});

const fileName = (path: string) => path.slice(path.lastIndexOf('/') + 1);
const darkByName = new Map(Object.entries(dark).map(([p, a]) => [fileName(p), a]));
const darkBySrc = new Map<string, string>();
for (const [path, asset] of Object.entries(light)) {
  const match = darkByName.get(fileName(path));
  if (match) darkBySrc.set(asset.src, match.src);
}

/** Spread onto an <img>: `<img {...themed(asset)} width="24" height="24" alt="" />` */
export const themed = (asset: ImageMetadata) => {
  const darkSrc = darkBySrc.get(asset.src);
  return darkSrc
    ? {src: asset.src, 'data-light-src': asset.src, 'data-dark-src': darkSrc}
    : {src: asset.src};
};
