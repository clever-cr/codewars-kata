function discount(totalamount) {
    const disc = totalamount > 100 ? totalamount * 0.1 : totalamount * 0.05;
    return disc;
}
