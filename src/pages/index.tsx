import Image from "next/image"
import Link from "next/link"

import banner0 from "@/assets/assa-banner-0.png"

import limpeza from "@/assets/banner_limpeza.png"

import todoit from "@/assets/banner_todoit.png"

import utilidades from "@/assets/banner_utilidades.png"

import cuidados from "@/assets/banner_cuidados.png"

const homePage = () =>{
  return(
    <main>
      <div className="w-full h-auto">
        <div className="relative">
          <Image src={banner0} alt="Banner apresentação"/>
          <div className="pl-5 absolute top-1/2 -translate-y-1/2">
            <h1 className="text-6xl text-white font-bold">Soluções para <br/>o seu dia a dia</h1>
            <p className="text-2xl text-white">Um mix de produtos pensado para o seu varejo.</p>

            <div className="flex flex-row flex-wrap gap-5 pt-5">
              <Link href="#" className="bg-green-500 text-white text-center p-3 rounded">Conheça nossos produtos</Link>
              <Link href="#" className="border-1 border-white text-white text-center p-3 rounded">Fale com a ASA</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto">
        <div className="containerScreen">
          <section className="flex flex-col pt-5">
            <h3 className="text-center text-4xl font-bold text-blue-900">Nossas Linhas</h3>
            <p className="text-center text-xl font-bold text-blue-900">Soluções para cada rotina.</p>
          </section>

          <div className="flex flex-wrap flex-row">

            <section className="basis-1/4">
              <div className="p-5">
                <Image src={limpeza} alt="Banner Cuidados pessoais" className="object-cover"/>
                <div>
                  <h5>Faça você mesmo</h5>
                  <Link href="#" className="border-1 border-blue-700 text-blue-700 text-center p-3 rounded">Conheça a linha</Link>
                </div>
              </div>
            </section>

            <section className="basis-1/4">
              <div className="p-5">
                <Image src={todoit} alt="Banner Cuidados pessoais" className="object-cover"/>
                <div>
                  <h5>Faça você mesmo</h5>
                  <Link href="#" className="border-1 border-blue-700 text-blue-700 text-center p-3 rounded">Conheça a linha</Link>
                </div>
              </div>
            </section>

            <section className="basis-1/4">
              <div>
                <Image src={utilidades} alt="Banner Cuidados pessoais" className="object-cover"/>
                <div className="p-5">
                  <h5>Faça você mesmo</h5>
                  <Link href="#" className="border-1 border-blue-700 text-blue-700 text-center p-3 rounded">Conheça a linha</Link>
                </div>
              </div>
            </section>

            <section className="basis-1/4">
              <div>
                <Image src={cuidados} alt="Banner Cuidados pessoais" className="object-cover"/>
                <div className="p-5">
                  <h5>Faça você mesmo</h5>
                  <Link href="#" className="border-1 border-blue-700 text-blue-700 text-center p-3 rounded">Conheça a linha</Link>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}
export default homePage