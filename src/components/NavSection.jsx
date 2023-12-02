import React, { useState } from "react";
import { Container } from "react-bootstrap";

const NavSection = () => {
  const [nav, setNav] = useState(false);
      if (nav === true) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
  return (
    <>
      <nav className="bg-black">
        <Container className="py-2 bg-black">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p className="text-white mb-0">logo</p>
            </div>
            <div className={`${nav ? "show_nav left_0" : "hide_nav left_100"}`}>
              <div
                className="d-lg-none z-3 crossicon text-white text-decoration-none"
                onClick={() => setNav(false)}
              >
                X
              </div>
              <div className="d-flex gap-4 align-items-center">
                <li
                  onClick={() => setNav(false)}
                  className="text-white fw-normal text-decoration-none list-unstyled"
                >
                  Home
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="text-white fw-normal text-decoration-none list-unstyled"
                >
                  About
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="text-white fw-normal text-decoration-none list-unstyled"
                >
                  Team
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="text-white fw-normal text-decoration-none list-unstyled"
                >
                  Roadmap
                </li>
                <li
                  onClick={() => setNav(false)}
                  className="text-white fw-normal text-decoration-none list-unstyled"
                >
                  Partners
                </li>
              </div>
            </div>
            <div
              className="d-lg-none text-white mb-0"
              onClick={() => setNav(true)}
            >
              =
            </div>
          </div>
        </Container>
      </nav>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          cum ducimus molestias sequi assumenda nam! Dolorem repellendus
          corrupti molestias pariatur. Qui quos tenetur laboriosam ad accusamus
          iure exercitationem nihil hic libero. Expedita quasi quaerat sequi eum
          aliquam ratione sapiente velit ut, corporis illum ad autem nobis!
          Quasi impedit possimus vitae recusandae laboriosam cupiditate laborum.
          Modi ea sunt voluptatum temporibus. Laudantium soluta, quo ullam
          deserunt obcaecati laboriosam aliquid reprehenderit quos, qui iusto
          cumque labore ea facilis maiores eum sequi nisi rem aut harum ex
          nesciunt aperiam voluptatum consectetur? Adipisci nulla maxime
          temporibus quod dolorum iusto libero ab officia cumque, repudiandae,
          quisquam laborum voluptates nobis earum ut cupiditate eaque. Nobis,
          cumque. Vel, eaque optio quo laudantium neque tempora ipsa
          consequuntur reprehenderit. Molestiae veritatis nisi quidem deserunt
          repellat repudiandae, cum exercitationem tenetur, pariatur velit
          minus, voluptas adipisci aperiam perferendis! Itaque sequi, ratione id
          dignissimos est ipsam, voluptatem autem voluptas asperiores laboriosam
          quia ad neque vitae sunt odit odio eum iste aperiam earum consectetur!
          Aliquid expedita, exercitationem quia, explicabo minus ratione error
          laboriosam nesciunt reiciendis corporis vero necessitatibus, adipisci
          consectetur quas possimus tempore eaque placeat. Laborum cumque quidem
          consequatur doloremque velit fuga sint eveniet assumenda porro. Minima
          maxime veritatis sit itaque dolor explicabo et assumenda numquam?
          Nesciunt cupiditate deserunt rem ipsa, animi debitis eum enim officia
          nam explicabo distinctio pariatur tempore tenetur, neque perspiciatis
          commodi similique quos voluptatum. Reiciendis nihil exercitationem
          eius sapiente vel esse impedit sed vero, perspiciatis quibusdam
          mollitia cupiditate! Eligendi odit laboriosam suscipit rerum, ad
          labore quas earum excepturi ullam est obcaecati soluta vel iste ab
          pariatur mollitia possimus consectetur, amet repellendus? In molestias
          laudantium id, facilis ut, accusamus ullam deserunt necessitatibus
          nihil labore voluptates, dicta vero perspiciatis quisquam corrupti?
          Eos iure totam distinctio enim maiores eum aperiam, ad maxime. Quasi
          minima aperiam, beatae perspiciatis consequatur iure saepe similique
          quibusdam unde alias, eveniet, reiciendis ducimus. Maxime nesciunt
          beatae dolore adipisci sequi corporis unde minima, sed maiores eveniet
          nihil libero non? Temporibus assumenda illo debitis nemo totam harum
          aliquam beatae, dolorem nobis, dicta voluptatibus alias eligendi a non
          consequatur incidunt sequi cum distinctio eveniet perferendis quod
          unde mollitia iste. Beatae, totam mollitia ex natus vero fugit,
          consequatur facere, earum neque itaque nostrum maxime velit quaerat!
          Odio, architecto repellendus corporis adipisci nihil quibusdam nam
          pariatur sapiente, libero dolore ipsa aut. Voluptates amet nemo quidem
          quas explicabo iste aperiam magni fugiat eligendi qui ullam,
          laboriosam molestiae dignissimos architecto veritatis accusamus
          voluptas cumque temporibus blanditiis ipsam? Explicabo nemo nostrum
          cupiditate eum quis, officia aliquid! Accusantium et commodi
          repudiandae ea mollitia ratione, inventore illum suscipit voluptates
          veritatis cum dolor quia laborum nisi officia quidem iste. Quaerat
          magnam laudantium illum atque expedita dicta doloremque, dignissimos
          facilis! Exercitationem voluptate, ea, suscipit itaque maxime debitis
          delectus nulla libero soluta excepturi omnis hic commodi! Pariatur
          dolorum facere accusamus quae, obcaecati exercitationem accusantium
          inventore aliquam tenetur adipisci cumque harum qui. Quas blanditiis
          quia at perspiciatis consectetur nesciunt suscipit temporibus eveniet
          minima beatae? Repudiandae possimus iure, libero autem eveniet sequi
          non porro nulla iusto voluptate consectetur aperiam quo, illo
          accusamus perspiciatis itaque quidem exercitationem voluptates ex
          molestias praesentium laudantium saepe. Voluptas unde, dolore, officia
          est quisquam ipsam quod laborum, quos harum provident corrupti.
          Facilis quasi assumenda esse asperiores, aspernatur, voluptas
          quibusdam quaerat non quidem soluta architecto perferendis hic in
          nobis culpa? Assumenda laudantium incidunt quos magni, ipsa aperiam
          blanditiis sed porro veritatis ducimus, sequi quae corrupti esse
          recusandae perferendis repellat beatae alias sunt ipsum commodi
          perspiciatis facere, quisquam voluptas! Eligendi nam eaque,
          reprehenderit et velit, harum voluptas suscipit minima id obcaecati
          itaque ratione quo fugiat aspernatur expedita necessitatibus iure quae
          nisi neque reiciendis cumque doloribus. Minus id nulla quod doloribus
          saepe quos quis natus est! Dolorem quos fuga dolor suscipit et,
          repudiandae officia, nulla minus perspiciatis nihil at eos,
          consequuntur deserunt esse ipsam aperiam? Magnam molestias, dolor
          praesentium facere autem eveniet qui culpa nobis soluta est quo saepe
          nostrum consectetur corporis, illo explicabo sed deleniti unde
          delectus dolore temporibus minima, voluptates harum. At amet minus
          deleniti dolores earum? A, saepe quaerat. Pariatur non optio qui
          fugit, odit iste nam? Exercitationem a, aspernatur, molestiae
          possimus, aperiam et cupiditate suscipit tempora quis minima animi.
          Quia odit magni maxime, possimus, quo recusandae accusamus, deserunt
          distinctio adipisci assumenda tempora nesciunt? Omnis quod dolor
          voluptates beatae rem maiores officia reiciendis, tempore quo mollitia
          esse aperiam animi dolorum illum commodi a ratione facere voluptatem
          voluptate accusantium atque corporis ab? Laudantium aliquid sequi
          incidunt praesentium veniam id quis totam neque, harum iure nobis!
          Illum distinctio nemo ut assumenda hic animi aperiam modi
          exercitationem facere vitae itaque quae voluptate dolore, inventore
          quam eaque fugiat quisquam, fuga nobis? Iste libero ipsum ea aperiam
          et corrupti iure dolor non consequuntur aspernatur amet inventore
          animi nostrum voluptatibus ipsa maxime atque sapiente voluptas
          veritatis fugit, hic id adipisci. Rerum dolores velit impedit delectus
          quasi eligendi hic commodi mollitia labore! Excepturi veniam saepe
          odit. Dignissimos at inventore veritatis explicabo, obcaecati eum id
          eligendi alias cupiditate cum, adipisci provident nostrum nobis,
          beatae neque est assumenda. Expedita omnis maiores ullam itaque
          debitis, facere qui iure? Aspernatur placeat fuga pariatur praesentium
          aut. Ratione, optio pariatur eaque laudantium illo facilis, possimus
          libero quae fuga fugit tenetur molestiae est! Saepe eius enim ullam
          recusandae reprehenderit dolore veritatis delectus eveniet eos ipsum
          perspiciatis non unde consequatur, exercitationem dolor aspernatur
          veniam harum dolores facere commodi aliquam eum mollitia officiis.
          Nulla ullam neque iste tenetur id. Corporis harum reiciendis,
          aspernatur delectus voluptate accusamus doloribus voluptas ab
          voluptatum numquam. Tempore ut vero, iusto, natus aspernatur vel,
          asperiores blanditiis nobis ab commodi fugiat quibusdam repudiandae
          possimus neque odit animi saepe! Ipsum, voluptatum tempora. Voluptates
          minima dolore consequuntur ullam delectus saepe quas voluptatum amet,
          in quis, corrupti rerum dolorum ducimus vitae dolorem libero itaque
          autem sequi, repellendus iusto consequatur harum? Quisquam blanditiis
          sequi laboriosam sint quam laudantium libero fuga mollitia
          necessitatibus, reprehenderit nobis aspernatur neque ab nihil officiis
          est dicta odit iste! Qui, reprehenderit! Quidem, excepturi. Magnam,
          architecto! Earum adipisci laboriosam debitis, consequatur laudantium
          cum quaerat commodi excepturi ipsam at facilis saepe reiciendis
          officiis deleniti perspiciatis, asperiores dolorem ea! Impedit
          provident vel suscipit ratione in repellendus.
        </p>
      </div>
    </>
  );
};

export default NavSection;
