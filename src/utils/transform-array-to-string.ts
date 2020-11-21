export type TransformArrayToStringProps = {
  name: string;
};

export function transformArrayToString(props: TransformArrayToStringProps[]) {
  return props.map((obj) => obj.name || '').join(', ');
}
