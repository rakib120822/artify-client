import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Card from "../../components/Card";
import LogoCard from "../../components/LogoCard";
import Marquee from "react-fast-marquee";
import { Typewriter } from "react-simple-typewriter";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.png";

function Home() {
  
  const [latestArtworks, setLatestArtworks] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://artify-server-xi.vercel.app/artworks/latest")
      .then((res) => res.json())
      .then((data) => {
        setLatestArtworks(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-xl text-red-800"></span>
      </div>
    );
  }

  return (
    <div>
      <title>Home</title>
      <header>
        <h1 className="text-4xl font-extrabold text-center my-10">
          <span className="text-red-800">ART</span>IFY –{" "}
          <Typewriter
            loop={true}
            cursor={true}
            words={["A CREATIVE ARTWORK SHOWCASE PLATFORM"]}
          />
        </h1>
        {/* carousel */}
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full h-[400px]">
            <img
              src="https://nordicwallart.com/cdn/shop/products/Hca0610fd385a4f4e9a540c904b13d9e0R.jpg"
              className="w-full h-[400px] overflow-hidden"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full h-[400px]">
            <img
              src="https://www.tallengestore.com/cdn/shop/products/New_York_Skyline_-_I_a01d9df7-0f02-469c-bcac-0fe32ab72035.jpg?v=1569413855"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full h-[400px]">
            <img
              src="https://wtm-assets-2.imgix.net/uploads/post/image/492/Copy_of_Copy_of_Untitled_Design__1_.jpg?auto=format%2Cenhance&fit=crop&crop=entropy&w=994&h=520&s=f35f8bde50bf6659a98cb45cce8f68f2"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full h-[400px]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Cg7D1DLbaEj_b04QzuBPPbtiGvvRjbWpUQ&s"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="w-11/12  mx-auto my-[50px] ">
        {/* card_section */}
        <section>
          <h1 className="text-center text-4xl font-extrabold mb-[50px]">
            Featured <span className="text-red-800">Artworks</span>
          </h1>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {latestArtworks?.map((artwork) => (
              <Card key={artwork._id} artwork={artwork} />
            ))}
          </section>
        </section>

        {/* top_artist_section */}
        <section className="my-20  ">
          <h1 className="text-center text-4xl font-extrabold mb-[50px]">
            Top <span className="text-red-800">Artists </span>
          </h1>
          <div className="carousel carousel-end rounded-box ">
            <div className="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRASHxtKawgAwcM8sO5UrX6xdGjR-y8E37DaQ&s"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3fQgrgGGmP7O7uSpiJMzpSBSFEde8YbIOQ&shttps://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkXanP-cy_YQtZkvHr5PakB8VRw8SJh749wg&s"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZhmipj9s_EPcproaCeI-JtICeYYHnyKJdQ&s"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdza3y0U63C-WhZEhyWc7ucDt1XzJaAc_ihw&s"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExIVFRUWFRcXFxUVFxcVFxcVGBUXFxcVFxUYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIARMAtwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwABBQQGBwj/xAA6EAABAwIEAwYDBwMEAwAAAAABAAIRAyEEEjFBBVFhBiJxgZHwEzKhI0JSscHR4RQz8QdicpIVNIL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+OAIoUhWgkK4UCIBBUK4RQrAQCArhWAihAEK4RwrDUAQpC6G4Zx2R/0T+SDkhSF1vwbhsUl1MhAqFUJkKiEC4VQmQpCBRCqE2EJCBcIYTSEJCBcKI4UQUAiAVBGEEARAKBXCCQrhWArhBUK4Vmyjb/sggC6qVOdEzDUJWrh8DO6BGHok2AWjTwOk/qunCYPURMei76WG6WhBn/0o2B87j+FxYzhQPQ6gi4XpRhLWFt0k0SNRPTeEHh8Zw5zNrcxuuKF7rE4IEWGu2x8+a87xDh0XH+PFBjQhhNcyEJCBZCqEwhCQgWQhITCFRCBUK1ZCiCgEQVBEEFgIwFQRgIIArAVwgruhqBRfJsumgz6rkoBaNJqDRw1OY5LbwdMA6aeyszhzNJXo8JRBItb3N0HTSEaDZaOHpyNPRBRw+k6a/wA+oW1wygDt7i/kg4GYXawtp780JwgPkfy8Fr1KUXPvRV/TmDMSdiPPn1Qefq4cfv13CyMdgxJtY6heur0wbG3qelvJZfEKHMbcvNB834thMjlnEL2vaDCd2eXLkRzXjqjIJCBMISE4hCQgSQhITSEJCBRCiMhRAoIgqCIBAQCY0IAExoQXC48e64C7gFmY495AzDnRamHdf91k0NFp4bUINzh56X5L1XC6IsT78F5TBncXXseEXYTuNkGy8WmBqPHWLwtHh9aAbTa11wCmSQI1jpbwWpgqYDSYOoHO8x4IGNpl8GR4AcvFdQw0j5ul/wCEbWgAGB5mY6wjD5aJj0/nwQZGJw+4j3yWVjmHLy/f3Pot3FAmQs3GNzNncR1QeV4uz7MiNj6bfmvCYmlG99/FfQeO6Fuoj9P8LyHH6ID5G/5oMaEJCaQhIQJIQEJzggIQKIUREKIEBG1CAjAQG0IwELUwIArvytJWXXfN1rYinLHDosUGWoOnBOvC0qDL+7rGomCtrD3m+0+/og9JhcPABHovX8FwwtBi3j6/VeI4bjDkE2gjax6j6r13COKsAmRMwBO3mg9bSoWMwSAPK06Hmu3BNbAGzoPmTouTh2LzE3G2v4hHPTWPJdVOpe0Xh0b8vVAzC1A5k7nQed+vRdRpuLdgB71WWyGk3gB7vTMT78Fy4/tFTpghsPi/PTayDZfgyLnoD6LMrU8oI8/IrOPao1QCx2X8RLdCdv0nr60OJ/EzEucS0feFucSBCDD4v6Xvzif2XnuN4RzyHOhsCJP3jtC3cW/NWYwXvmcBsL5R0k38k3jha8vcYimI539wg+eOagITn3lAQgSQluCe4JbggSQoiIVoOUJgCAJjUBhMaEDQmtCCwFgOsXBehCwsQPtHIKw9MuIaASSQAAJJJsABuZj1WnhgWxn7oi0/NykDl4rk4awF0Hl6HmCtl+AL3Nbptm3PKfAQPJB34ejSyHM7JNy5z8oH/wA5ZPqubFUKbDFKuc2pbBBkf7XALcw3AWupgObfQuAzTsSQVuYjs7TrUPhkuzh2YPMFznkDNL5kfxug89wbtW5gyPkk2BE3I0B5H3dfRuBYpxaMxcTA1iJvAG/JfGK+EFKu+m8FxlgE3Gsk9TpG0F3RfZuAcJpf0lQBjQHU7tgRJEaeaDG7R8Uy1XtbMON+QdHevt9fJYVTiGEpwa5e5pmSxpc23PX2Qtvh9Br6YJYC4d0kiQCLEDoDb0XX/wCEa5uXKHScxjunS8x0H5IM/D8QwzZDappAOjvBzQ5wtlDnNDSTpYnXdW/FVHE5Gg5jEgEAwJ9+IWzR4YMjaGVrKYJJAl2vzXdueZ0Xfw3hzaZcGNAA0A2AadPMjRB5ZmDNOo2fnJe9xF7xz6WHkVw9paRo0GtmTUM+UrV4q4urwybNdpyMrB7XVS74I2DPrug8yQgITiEBCBLgluCcQluCBJCiIhRByNTGoAjagY1NaltTGoDCxuIU4qeK2glYyiHNuNLhBjUKmVy+idn8M3ENGUj4gtl3cNsvM/7dTaJvHziq269L2bxQ+U8vXog+h4eg5ph026LufUFJhcYiN9TO0bBZ/DsW6qGg1Xvg/eDXSNhJBMeaZ2re1tB7ibhpi9teX/ZB4DiR+Lig4filfaOz1H7DNOoAjy3Xwjg1dxrtLtHERK/QPBRFENuLAygpmEY1uaI1Ji411Pnujq8KEy1xAIkaweX6eq5eLYp9BvxWmwNx5x5bLUaadamHZWuB6a+KDINI/EyzmI1DduhOy6ccwUWOcXatM8m2lc2IrtYcrQGi8gWA8gPcrI4rj8wg2Gg5f43hBiMrn4j6gdES0E7C9456rzHE8QXukmYsPBa/FR9hI0NQzsbSPTReeKBZCEhGULkCnJbgnEJZQJIUROUQcDUxqW1Maga1MalNTWoGNRESCOiFqMIMQ09RHv8ARddJmXLB3tzva6TjG5Xk6bowHOgjbU7n66wg952fqZWZidT+eiyO2uPdUaWgnKNevuE/h1Q5Q2QDv0CZicA6qxrYuRbebC5i0aoPKcF4g349PPoCvv3ZzibAIzCMm6+GYbsw57nEGzTqD46Aa/5XuOznCAyoBUqOcIEAyGmdCfLMR1A5oPcUsS2vUNGJptPfLh3TI+UTrt0CzH1H4Kt8MyaNQ/Zk3iDdhPTreOoK28G5ubw7umYWANwNpkz+4XHxloxTfhkBpgPYTq1wMOj/AIz4xOxCCOa15ubHcga7A9FicUAHdE+MC48R9fBIGIfSORxioJANxPhPuxXTTGj8odP3SbyIsTN76eKDz/aCpFFrDBLXkD/iBt9F5orb7SVQ5453na4MaLGIQLQlGULkCyluTSluCBRUVlRBmhMalNTGoGtTWpTU1qBrUYSwVn4/ikS1lzzQXxeu2w+971Xd2eDXOGgMakzfbXTT8/LyzjNytPgmKyuE+UlB6/iOHfh2moYM32NhrG/+QgwvaGpLZp1Bk0AEzYj5dtVuUT8bDGRmDflja3MXIgi8c1mcNxLWkB7QL2OW34b6SN7876IGU+ONphh+DWkAS4MJ7wjl4A6xIWpiuOU6jg6nnENBHde4gxewb1Nto6W2MGKTmgx3cwIOQzFi4wNe7B03G5to4WhSJHcGrRuRBBLdY1i56jRBiU+O1yTkw9WHZQDAa4AOncjYAJdbjVWiQ17KrWOtmIkBwuAHBxkwBvpvaF7XC0mAHugAASOR8Sb3ERIlcXEsOKrTAgSBldDhOkDn6bxvYM7hzRVGepLnOa10xcjKW67gwRMXnquXieJZh6ZIgh02NpgbW57+wPE8b8ItFOR3MhBMDIA7ToMwEaiPTwPabinxKppA91sHzI0/P6IOqtUzHMd0orMweMLbO0WiHg6FBRQORoXIFlLcmuSygU5RWQqQZbUecDdcJqFAUHecW0bpVTifILjyoCEB1sY92p9FzlHCGEFIqZgoVAg9pwXjEU41jqPSNhflsvR4PCCsCQBcbWsbbxGut9BtK+X4eu5hlphev7O8XhtnHM3kfxAtOo5SPPqg9/wag5jy2YbMOk/VxaNQQBA0jmb+jw1Fj6bZIBDGZiPmBiNCN25h6DULzPB6ueJeA0tazaYBAy+JzD67krew9QBzrtuJAAtBddmwOxmRtyKDQ/oTNyTlJAIF4nMWxu2Y9hPgNbrLB5QBsd7XG2o6LIrcVDAA78RsNSQRMjY8wN4XJi6j6plzrW0sddTG9kHFxJ4quyi4GaXGSc03Em50HovjtaRiqgP4nL7S7DZSF8e45TjHPA/FP0QWVQqEaFW5CUHQzHuGt05vEAdRCzyFRQawxDTurJWNCsPI0KDVcqXHTxZ+8ogyWqQrlWEFQgLZsnJbHQ4g7oAexLc1dFRtwgqNQIAV5EUXXbgqGYwg4xTKOkXNMtJC1qeC1sujCYCbQg6eEcVrtbY2bJ+giPAgHyXQzj+IEkN+aBqTAmY6rU4XwUxEarqPBYsg0+zlJz2F9Q94mfAcvfJbtLumFn8Bwpa0yVpYPUlAnir4aXcgT9F8Pq4g1MS5/NxPlsvoP+oXHR/69M3PzkbDkvnGE/u+qDUfqgciN0JQAVQKIoCguVUqKggsKKKIOMKwFFcoIgqNnxRKkEpPnXUKPCICFHIEOC6WvLWhw1aQUionsbLSOhQep4Q5tdkt1HzDkV6TD8GtK+W4LFvovDmOLXDcb+PNe74N/qAyMuIpkGPnpiR/1Onkg9Zw5trLoxDLhedwnajC5rVgAfxAj9EzE9r8M0/OX/8AEH8zZB6fDgC3NeY7U9p2YeadIh1Q6nZvj16LznG+2VSrakPht5z3j57Lyr3yeZKBtasSS5xJJMknmVz4IfaeqY8XAS8P/d9UGnKB6MJbygjrIETkEoIoqKgQWVFSiDkBVqlCgF74hNakVk1hkICUVFQoFuXRh1zuTcOUC3tlB8Pkmv8AmKhQKAKNsq1RKAi71TKbIuUNJnNE9yCmXKXS/uptEJDD9og1JVOVKFALillE9BKCyVTVTlAUBuKiFxUQcoVoWqyUAuClA7clZSwYMoOgqpVBWgFyulqqKjUB4izgeYVFXiflB6oQUBFXTYqamtQC4qiFFCUBN0XOP7gXSSuZn9xBohU4qwhIQUSlonKgUFEoWq0IQESrQuUQczURQNKJBEDgiVICpukIpSmWPimoKUarKEIHOu0jp/KRTNk9i56aBrSjzIFRKAsypqElFTQGSkM+dNJSafzoNCVJVBDKCyhKtC5BRKqVRUCCOUVEqkHO1GUtqNBCooqQR435JrSglVTtZAwhUrVBAxiW4XPqjCqqLgoIgJRISgolMCWEYQSUuh83qjJS8Pr75oO6VTlQKiCSqKiEoKJUlUogjiqVOKtBytRhLBRgoCUUUCCwqdz5K1YQEFYQM5I0FqO0VItkAShcVChQWEUoWqyUAucphtUL0eHQdMq3FA1RxQGSglQoUEJVqlUoKcVEJCiDnCMKKIDUKpRAQUCiiCO1COVaiCBEwqlEC3ICoogIKFRRAt5TaPv0UUQOVKlEBuSyrUQSEsae+aiiCFRRRB//2Q=="
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoE_zCH5i4i5oFk8VYmMe0OrN-TaZrQtsK_g&s"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8mnG6lpu9o9j6SB_meu_4AygEBAbOm2md-Q&s"
                alt="Drink"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlvy3tdER-uFsh3MbN22bK26A-bb1SbkUd_Q&s"
                alt="Drink"
              />
            </div>
          </div>
        </section>

        {/* show_case */}
        <section className="my-4">
          <Marquee autoFill={true} pauseOnHover={true}>
            <LogoCard imgUrl={image1} />
            <LogoCard imgUrl={image2} />

            <LogoCard imgUrl={image3} />

            <LogoCard imgUrl={image4} />
            <LogoCard imgUrl={image5} />
          </Marquee>
        </section>

        <section className="my-5"></section>
      </main>
    </div>
  );
}

export default Home;
