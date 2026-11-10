def bitStuff(msg):
    count = 0
    st = ""

    for bit in msg:
        st += bit

        if bit == "1":
            count += 1
            if count == 5:
                st += "0"
                count = 0
        else:
            count = 0

    return st


def bitDestuff(msg):
    unst = ""
    count = 0
    i = 0

    while i < len(msg):
        if msg[i] == "1":
            count += 1
            unst += msg[i]

            if count == 5:
                i += 1
                count = 0
        else:
            unst += msg[i]
            count = 0

        i += 1

    return unst


msg = input("Enter some message: ")

bstuff = bitStuff(msg)
print("Message after stuffing:", bstuff)

bdestuff = bitDestuff(bstuff)
print("Message after destuffing:", bdestuff)
