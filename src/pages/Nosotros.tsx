export const Nosotros = () => {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      <section className="max-w-6xl mx-auto px-6">

        {/* ENCABEZADO */}
        <div className="text-center mb-20">
          <p className="text-yellow-500 tracking-[0.5em] text-xs mb-5">
            URBAN CROWN
          </p>

          <h1 className="text-5xl md:text-7xl font-serif">
            NOSOTROS
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto mt-6 leading-relaxed">

            Una marca creada para representar estilo, carácter y una
            forma diferente de entender el calzado.
          </p>
        </div>

        {/* NUESTRA HISTORIA */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-yellow-500 tracking-[0.4em] text-xs mb-5">
              NUESTRA HISTORIA
            </p>

            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              MÁS QUE
              <br />
              <span className="text-yellow-500">
                CALZADO.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>
              Urban Crown nació de una idea sencilla: convertir el
              gusto por el estilo, la calidad y los pequeños detalles.
            </p>

            <p>
              No buscamos tener de todo, ni ser mejores que nadie.
              Creemos en seleccionar. Elegir algo que realmente
              vale la pena llevar y que representa nuestra forma de
              entender el estilo.
            </p>

            <p>
              Queremos que cada persona que elija Urban Crown, encuentre
              algo más que un producto. También queremos transmitir seguridad,
              carácter y un estilo propio.
            </p>

            <p>
              Que cada pieza tenga algo que decir, incluso sin que
              quien la lleva tenga que decir una palabra.
            </p>
          </div>
        </section>

        {/* NUESTRA IDIOLOGÍA */}
        <section className="mt-28 border-t border-white/10 pt-20">
          <div className="max-w-3xl">
            <p className="text-yellow-500 tracking-[0.4em] text-xs mb-5">
              NUESTRA IDIOLOGÍA
            </p>

            <h2 className="text-4xl md:text-5xl font-serif">
              ELEGIR CON
              <span className="text-yellow-500"> INTENCIÓN.</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mt-8">
              Buscamos que nuestros clientes encuentren calidad, se
              sientan cómodos y, sobre todo, tengan la confianza de
              comprar en una marca que cuida cada detalle.
            </p>

            <p className="text-gray-500 leading-relaxed mt-6">
              Desde el momento en que eliges tu producto hasta que lo
              recibes, queremos que la experiencia se sienta diferente.
            </p>
          </div>
        </section>

        {/* FUNDADOR */}
        <section className="mt-28 border-t border-white/10 pt-20">
          <div className="max-w-3xl">
            <p className="text-yellow-500 tracking-[0.4em] text-xs mb-5">
              FUNDADOR
            </p>

            <h2 className="text-4xl md:text-5xl font-serif">
              JUAN CARLOS
              <br />
              <span className="text-yellow-500">
                CUERO VILLA
              </span>
            </h2>

            <p className="text-gray-500 mt-3">
              Fundador de Urban Crown
            </p>

            <div className="mt-8 border-l border-yellow-600 pl-6">
              <p className="text-gray-400 leading-relaxed italic">
                "Mi intención con Urban Crown es darle identidad a una
                forma de entender el estilo: elegir con intención,
                cuidar los detalles y llevar aquello que realmente
                nos representa."
              </p>
            </div>
          </div>
        </section>

        {/* CIERRE */}
        <section className="mt-28 border-t border-white/10 pt-20 text-center">
          <p className="text-yellow-500 tracking-[0.5em] text-xs mb-5">
            URBAN CROWN
          </p>

          <h2 className="text-4xl md:text-6xl font-serif">
            TU ESTILO.
            <br />
            <span className="text-yellow-500">
              TU CORONA.
            </span>
          </h2>
        </section>

      </section>
    </main>
  );
};