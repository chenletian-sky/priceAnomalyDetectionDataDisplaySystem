export  function keys(map: any) {
    var keys = [];
    for (var key in map) keys.push(key);
    return keys;
}

export function slider(config = {}) {
  let {
    // @ts-ignore
    min = 0,
    // @ts-ignore
    max = 1,
    // @ts-ignore
    value = (max + min) / 2,
    // @ts-ignore
    step = "any",
    // @ts-ignore
    precision = 2,
    // @ts-ignore
    title,
    // @ts-ignore
    description,
    // @ts-ignore
    disabled,
    // @ts-ignore
    getValue,
    // @ts-ignore
    format,
    // @ts-ignore
    display,
    // @ts-ignore
    submit
  } = typeof config === "number" ? { value: config } : config;
  precision = Math.pow(10, precision);
  if (!getValue)
    getValue = (input: { valueAsNumber: number; }) => Math.round(input.valueAsNumber * precision) / precision;
  // @ts-ignore
    return input({
    type: "range",
    title,
    description,
    submit,
    format,
    display,
    attributes: { min, max, step, disabled, value },
    getValue
  });
}