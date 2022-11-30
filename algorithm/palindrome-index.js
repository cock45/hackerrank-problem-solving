// Time Complexity is O(|s|)

function palindromeIndex(s) {
    function isPalindrome(head, tail) {
        while (head < tail) {
            if (s[head++] !== s[tail--]) {
                return false;
            }
        }
        return true;
    }

    let head, tail;

    for (head = 0, tail = s.length - 1; head < tail; head++, tail--) {
        if (s[head] !== s[tail]) {
            break;
        }
    }

    if (isPalindrome(head, tail - 1)) {
        return tail;
    }

    if (isPalindrome(head + 1, tail)) {
        return head;
    }

    return -1;
}
