def charStuff(flagbyte, escbyte, payload):
    x = payload.replace(escbyte, escbyte * 2)
    y = x.replace(flagbyte, escbyte + flagbyte)
    return flagbyte + y + flagbyte


def charDestuff(flagbyte, escbyte, payload):
    x = payload[1:-1]
    x = x.replace(escbyte + flagbyte, flagbyte)
    y = x.replace(escbyte * 2, escbyte)
    return y


msg = input("Enter some message: ")
fb = input("Enter flag byte: ")
eb = input("Enter escape byte: ")

print("Original message:", msg)

stf = charStuff(fb, eb, msg)
print("Message after character stuffing:", stf)

dstf = charDestuff(fb, eb, stf)
print("Message after character destuffing:", dstf)
