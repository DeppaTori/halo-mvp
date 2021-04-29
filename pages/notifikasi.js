import Link from 'next/link'

const Notifikasi = ()=>{
    return (
        <>
            <h1>Yeah! Pembelian sudah berhasil di kirim ke penjual</h1>
            <Link href="/home">
                <div>Belanja lagi</div>
            </Link>
           
        </>
    )
}

export default Notifikasi;