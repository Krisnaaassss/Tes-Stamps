function isPrime(num) {
    // jika num <= 1, maka bukan prima
    if (num <= 1) return false;
    // jika num <= 3, maka prima
    if (num <= 3) return true;
    // jika num % 2 === 0 atau num % 3 === 0, maka bukan prima
    if (num % 2 === 0 || num % 3 === 0) return false;
    // perulangan untuk mengecek apakah num dapat dibagi oleh bilangan lain
    for (let i = 5; i * i <= num; i += 6) {
        // jika num dapat dibagi oleh i atau i+2, maka bukan prima
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    // jika tidak ada bilangan yang dapat membagi num, maka prima
    return true;
}


function generateSequence() {
    const result = [];

    // perulangan untuk mengenerate sequence bilangan
    for (let i = 100; i >= 1; i--) {
        // jika i bukan prima, maka continue
        if (isPrime(i)) continue;

        let output = '';
        // jika i % 3 === 0, maka output += 'Foo'
        if (i % 3 === 0) output += 'Foo';
        // jika i % 5 === 0, maka output += 'Bar'
        if (i % 5 === 0) output += 'Bar';

        // jika output tidak kosong, maka tambahkan output ke result
        // jika output kosong, maka tambahkan i.toString() ke result
        result.push(output || i.toString());
    }

    // mengembalikan sequence yang di generate dengan join(', ')
    return result.join(', ');
}

// mencetak sequence yang di generate
console.log(generateSequence());


