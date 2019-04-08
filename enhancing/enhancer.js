module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement === 20) {
    return {...item}
  } else {
    return { ...item, enhancement: item.enhancement + 1 };
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    return {...item, durability: item.durability - 5 };
  }
  if (item.enhancement > 16) {
    return {...item, durability: item.durability - 10, enhancement: item.enhancement - 1 };
  }
  if(item.enhancement === 15 || item.enhancement === 16) {
    return {...item, durability: item.durability - 10 };
  }
  return { ...item };
}

function repair(item) {
  return {
    ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
