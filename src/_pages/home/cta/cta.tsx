import Image from "next/image";
import s from './cta.module.css'
export function CTA() {
    return <>

        <div className={s.cta + ' w-full flex px-[100px]'} >
            <div className="flex flex-col items-start w-6/12">
                <div className="font-bold text-[35px]">بهترین عسل در جهان</div>
                <Image src='/assets/logo2.svg' alt="logo" width={'0'} height={'0'} className="w-[300px] h-auto my-4"></Image>
                <div className="text-[17px]">
                    <span className="font-bold">سبلان عسل</span> با همکاری بهترین زنبورداران، بهترین عسل خام و محصولات زنبور عسل هنرمندانه از استان اردبیل را ارائه می‌دهد، تا این محصولات را مستقیماً به میز شما برساند، و از طریق این تجربه، به دنیایی از عسل طبیعی ارگانیک و لذیذ وارد شوید.
                </div>
                <div className="w-full mt-5">
                    <button className="bg-primary text-white rounded p-3">مشاهده محصولات</button>
                </div>
            </div>

            <div className={s.honeypot + " w-6/12 flex justify-end"}>
                <img src="/assets/honeypot.png" className="w-[600px] h-auto" />
            </div>
        </div>

    </>
}
export default CTA;