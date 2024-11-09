// import qs from "query-string";

// interface URLQueryParams {
//   params: string;
//   key: string;
//   value: string;
// }

// interface RemoveURLQueryParams {
//   params: string;
//   keysToRemove: string[];
// }

// export function formURLQuery({ params, key, value }: URLQueryParams) {
//   const queryObject = qs.parse(params);

//   queryObject[key] = value;

//   const queryString = qs.stringify({
//     url: window.location.pathname,
//     query: queryObject,
//   });

//   return queryString
//     ? `${window.location.pathname}${queryString}`
//     : window.location.pathname;
// }

// export function removeKeysFromURLQuery({
//   params,
//   keysToRemove,
// }: RemoveURLQueryParams) {
//   const queryObject = qs.parse(params);

//   keysToRemove.forEach((key) => {
//     delete queryObject[key];
//   });

//   const queryString = qs.stringify(queryObject, { skipNull: true });
//   return queryString
//     ? `${window.location.pathname}?${queryString}`
//     : window.location.pathname;
// }

export function formURLQuery({ key, value }: { key: string; value: string }) {
  const url = new URL(window.location.href);
  url.searchParams.set(key, value);

  return url.pathname + url.search;
}

export function removeKeysFromURLQuery({
  keysToRemove,
}: {
  keysToRemove: string[];
}) {
  const url = new URL(window.location.href);

  keysToRemove.forEach((key) => {
    url.searchParams.delete(key);
  });

  return url.pathname + url.searchParams.toString()
    ? `?${url.searchParams.toString()}`
    : "";
}
