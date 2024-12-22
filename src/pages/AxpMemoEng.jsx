import React from "react";

const AxpMemoEng = () => {
  return (
    <div className="flex relative py-5 ">
      <section
        className="flex flex-grow flex-col bg-white shadow-lg
                            px-1 rounded-md"
      >
        <header className="flex flex-col mt-4 justify-center items-center">
          <h1 className="font-bold px-2">
            Formation of the People’s Parliament of Azerbaijan: A New Chapter
            for Democracy
          </h1>
        </header>
        <article className="mt-1 px-2 font-serif">
          In a significant move to counter decades of authoritarian rule and
          advocate for democratic governance, Azerbaijani citizens have
          announced the formation of the People’s Parliament of Azerbaijan
          (PPA). This bold initiative aims to restore democratic traditions,
          promote human rights, and dismantle systemic corruption. Drawing
          national and international attention, the PPA calls for global
          solidarity in its quest for a democratic Azerbaijan.
        </article>
        <article className="flex flex-col">
          <header className="flex m-auto py-2">
            <h1 className="font-bold">A History of Authoritarianism</h1>
          </header>
          <span className="px-2 flex justify-center items-center font-serif">
            Since gaining independence from the Soviet Union in 1991, Azerbaijan
            has faced challenges in establishing a sustainable democracy.
            Instead of fostering a transparent and participatory system, the
            nation has been marred by accusations of fraudulent elections and
            entrenched authoritarianism. Critics argue that Azerbaijan has
            evolved into a family-dominated regime, with power consolidated
            among a select few. The tipping point for the PPA’s formation came
            during the 2024 presidential and parliamentary elections. Both
            events were criticized for widespread manipulation, further
            marginalizing opposition voices. In its founding declaration, the
            PPA condemned these elections as a breach of Article 6 of the
            Azerbaijani Constitution, which prohibits the seizure of power by
            any group or individual. The declaration also accused the regime of
            subverting the judiciary, monopolizing the economy, and stifling the
            media, leaving citizens disillusioned and disenfranchised.
          </span>
        </article>
        <article className="flex flex-col">
          <header className="flex m-auto py-2">
            <h1 className="font-bold">The Vision of the People’s Parliament</h1>
          </header>
          <section className="px-1 sm:px-2 font-serif">
            The PPA positions itself as a democratic alternative to the current
            regime, rooted in the principles of transparency, justice, and
            accountability. Established through the collective efforts of
            Azerbaijani citizens at home and abroad, the PPA outlines an
            ambitious roadmap for reform:
          </section>
          <div className="px-2 sm:px-3 font-serif">
            <span className="font-bold">1.Political Reforms:</span>{" "}
            Transitioning to a parliamentary republic, ensuring free and fair
            elections, and curbing abuses of power. <br />
            <span className="font-bold">2. Judicial Independence:</span>{" "}
            Establishing an impartial judiciary free from executive control.
            <br />
            <span className="font-bold">3. Human Rights:</span> Releasing
            political prisoners, safeguarding freedom of speech, and addressing
            systemic discrimination. <br />
            <span className="font-bold">4. Economic Transparency:</span>{" "}
            Tackling corruption, reclaiming embezzled assets, and fostering
            economic equity. <br />
            <span className="font-bold">5. Social Justice:</span> Implementing
            policies to reduce poverty, protect vulnerable populations, and
            ensure equal opportunities for all.
          </div>
          <div className="px-1 sm:px-2 font-serif">
            The PPA also seeks to rekindle Azerbaijan’s democratic heritage,
            drawing inspiration from the 1918 Azerbaijani Democratic Republic,
            the first democratic state in the Muslim world. It aims to enshrine
            constitutional reforms that promote term limits, balance
            governmental powers, and prohibit familial monopolies in politics.
          </div>
        </article>
        <article className="flex flex-col">
          <header className="flex m-auto py-2">
            <h1 className="font-bold">A Call for Global Support</h1>
          </header>
          <div className="px-1 sm:px-2 font-serif">
            The PPA has issued an urgent appeal to international organizations,
            such as the United Nations and the Council of Europe, and democratic
            nations worldwide, urging them to recognize the Azerbaijani people’s
            struggle. It highlights scandals like{" "}
            <span className="text-italicized">Caviar Diplomacy</span>, where
            Azerbaijani officials allegedly bribed foreign politicians, as
            examples of the regime’s manipulation of global platforms. The PPA
            underscores the plight of over 300 political prisoners and
            systematic repression of journalists and activists, vowing to secure
            their release and provide reparations for past injustices.
          </div>
        </article>
        <article></article>
      </section>
    </div>
  );
};

export default AxpMemoEng;
