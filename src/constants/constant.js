export function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, '$& ');
}