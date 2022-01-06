//Rectangle overlapping.

const l1 = [0, 10],
  r1 = [10, 0],
  l2 = [5, 5],
  r2 = [5, 5];
//Prints overlap

// const l1 = [0, 2],
//   r1 = [1, 1],
//   l2 = [-2, -3],
//   r2 = [0, 2];
//prints do not overlap
function doOverlap(l1, r1, l2, r2) {
  const l1_x = l1[0],
    l1_y = l1[1];
  const r1_x = r1[0],
    r1_y = r1[1];
  const l2_x = l2[0],
    l2_y = l2[1];
  const r2_x = r2[0],
    r2_y = r2[1];
  if (r1_x < l2_x || l1_y < r2_y || r2_x < l1_x || r1_y > l2_y) {
    console.log("Do not overlap");
  } else {
    console.log("overlap");
  }
}

doOverlap(l1, r1, l2, r2);
