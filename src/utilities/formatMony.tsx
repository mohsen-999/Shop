const F_MONY = new Intl.NumberFormat(undefined, {
  currency: "eur",
  style: "currency",
});
function formatMony(number: number) {
  return F_MONY.format(number);
}

export default formatMony;
