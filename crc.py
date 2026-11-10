def crc_remainder(data_bin, gen_bin):
    data = int(data_bin + "0" * (len(gen_bin) - 1), 2)
    gen = int(gen_bin, 2)

    for i in range(len(data_bin)):
        if data & (1 << (len(gen_bin) + len(data_bin) - 2 - i)):
            data ^= gen << (len(data_bin) - 1 - i)

    remainder = bin(data)[2:].zfill(len(gen_bin) - 1)
    return remainder


def sender(data_bin, gen_bin):
    rem = crc_remainder(data_bin, gen_bin)
    codeword = data_bin + rem
    print("Data sent:", codeword)
    return codeword


def receiver(codeword, gen_bin):
    rem = crc_remainder(codeword, gen_bin)
    print("Remainder at receiver:", rem)

    if int(rem, 2) == 0:
        print("Data received without noise")
    else:
        print("Data consists of some noise")


data = input("Enter the data to be sent (in binary): ")
generator = input("Enter the binary generator string: ")

codeword = sender(data, generator)
receiver(codeword, generator)
