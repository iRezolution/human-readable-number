module.exports = function toReadable(number) {
    let num = number;
    if (num == 0) { return 'zero' } else {
        function digit0(param) {
            switch (param) {
                case 1:
                    return 'one';
                    break;
                case 2:
                    return 'two';
                    break;
                case 3:
                    return 'three';
                    break;
                case 4:
                    return 'four';
                    break;
                case 5:
                    return 'five';
                    break;
                case 6:
                    return 'six';
                    break;
                case 7:
                    return 'seven';
                    break;
                case 8:
                    return 'eight';
                    break;
                case 9:
                    return 'nine';
                    break;
                case 0:
                    return ' ';
                    break;
                default:
                    return "error";
            }
        }

        function digit1(param) {
            switch (param) {
                case 1:
                    return 'ten';
                    break;
                case 2:
                    return 'twenty ';
                    break;
                case 3:
                    return 'thirty ';
                    break;
                case 4:
                    return 'forty ';
                    break;
                case 5:
                    return 'fifty ';
                    break;
                case 6:
                    return 'sixty ';
                    break;
                case 7:
                    return 'seventy ';
                    break;
                case 8:
                    return 'eighty ';
                    break;
                case 9:
                    return 'ninety ';
                    break;
                case 0:
                    return '';
                    break;
                default:
                    return "error";
            }
        }

        function digit2(param) {
            switch (param) {
                case 11:
                    return 'eleven ';
                    break;
                case 12:
                    return 'twelve ';
                    break;
                case 13:
                    return 'thirteen ';
                    break;
                case 14:
                    return 'fourteen ';
                    break;
                case 15:
                    return 'fifteen ';
                    break;
                case 16:
                    return 'sixteen ';
                    break;
                case 17:
                    return 'seventeen ';
                    break;
                case 18:
                    return 'eighteen ';
                    break;
                case 19:
                    return 'nineteen ';
                    break;
                case 10:
                    return 'ten ';
                    break;
                default:
                    return "error";
            }
        }

        let str = "";

        let a = parseInt(num / 100);
        if (a) {
            str += digit0(a) + " hundred ";
        }

        let bc = num % 100;
        if (bc >= 10 && bc < 20 || bc == 10) {
            str += digit2(bc);
        } else {
            let b = parseInt(bc / 10);
            let c = bc % 10;
            str += digit1(b) + digit0(c);
        }

        return str.trim();
    } 
}