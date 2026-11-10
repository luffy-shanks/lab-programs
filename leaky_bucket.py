def leaky_bucket(incoming, bucket_size, leak_rate):
    bucket = 0
    print("Time\tIncoming\tBucket\tSent\tDropped")

    for t, packets in enumerate(incoming, 1):
        bucket += packets

        if bucket > bucket_size:
            dropped = bucket - bucket_size
            bucket = bucket_size
        else:
            dropped = 0

        sent = min(bucket, leak_rate)
        bucket -= sent
        print(f"{t}\t{packets}\t\t{bucket}\t{sent}\t{dropped}")


incoming_packets = [1, 4, 3, 0, 5]
bucket_size = 5
leak_rate = 2

leaky_bucket(incoming_packets, bucket_size, leak_rate)
