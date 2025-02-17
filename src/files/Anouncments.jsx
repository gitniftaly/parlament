import React from "react";

const Anouncments = () => {
  return (
    <div className="flex mx-auto flex-col items-center px-2 sm:px-4">
      <header className="font-bold text-lg py-3">
        <h1>Dörd millət vəkili mandatdan məhrum edildi</h1>
      </header>
      <p className="px-2">
        <span className="font-bold">15 fevral 2025-ci il </span>
        tarixində Azərbaycan Xalq Parlamentinin (AzXP) İntizam Komissiyası
        tərəfindən hazırlanan rəyə əsasən, dörd millət vəkili parlamentdən
        uzaqlaşdırıldı, və bir nəfər isə istefa verərək Azərbaycan Xalq
        Parlamentini tərk etdi. Qərarda
        <span className="font-bold"> Tural Sadıqlı, </span>
        <span className="font-bold">Əlövsət Sadıqlı, </span>
        <span className="font-bold">Marif Ağaməmmədov </span> və
        <span className="font-bold"> Rəşad Dadaşovun </span>
        fəaliyyətləri ilə bağlı ciddi etik pozuntular qeyd edilərək, onların
        millət vəkili mandatlarından məhrum edilməsi, Könül Əhmədovaya isə
        töhmət verilməsi haqqında AzXP Rəyasət heyətinə rəy təqdim olundu.
      </p>
      <article className="px-2 py-2 flex flex-col">
        <p className="font-bold"> Tural Sadıqlı haqqında rəy </p>
        Tural Sadıqlı, AzXP-nin ilk sessiyasının ilk iclasında həmsədrlik
        edərkən iclasın gedişatını pozmaqla, seçkiləri şübhə altına almaqla və
        millət vəkillərinə qarşı şər-böhtan xarakterli ifadələr işlətməklə
        ittiham edildi. Bundan əlavə, o, sosial media platformalarında AzXP və
        onun üzvlərinə qarşı təhqiredici və hədələyici ifadələr işlətdi. İntizam
        Komissiyası onun bu hərəkətlərinin AzXP-nin etik qaydalarına və
        Nizamnaməsinə zidd olduğunu qeyd edərək, onun mandatdan məhrum
        edilməsini təklif etdi.
      </article>
      <article className="px-2  flex flex-col">
        <p className="font-bold"> Əlövsət Sadıqlı haqqında rəy </p>
        Əlövsət Sadıqlı isə ilk iclasda iclasın gedişatını pozmaqla,
        Nizamnamənin müzakirəsini bilərəkdən uzatmaqla və AzXP Rəyasət Heyətini
        qaralamaqla ittiham edildi. O, həmçinin AzXP-nin rəsmi WhatsApp qrupunda
        və televiziya kanallarında parlamentin legitimliyini şübhə altına almaq
        cəhdləri ilə də seçildi. İntizam Komissiyası onun bu hərəkətlərinin etik
        qaydalara zidd olduğunu qeyd edərək, mandatdan məhrum edilməsini təklif
        etdi.
      </article>
      <article className="px-2  flex flex-col">
        <p className="font-bold"> Marif Ağaməmmədov haqqında rəy</p>
        Marif Ağaməmmədov, AzXP-nin təsis olunmasında rol oynamış “Azerfreedom
        TV” kanalını “casus və şər yuvası” adlandıraraq təhqir edib və onun
        bağlanması üçün çağırışlar etdiyi üçün ittiham edildi. Onun bu
        hərəkətləri AzXP-nin etik qaydalarına zidd hesab edildi və mandatdan
        məhrum edilməsi təklif edildi.
      </article>
      <article className="px-2  flex flex-col">
        <p className="font-bold"> Rəşad Dadaşov haqqında rəy </p>
        Rəşad Dadaşov, ilk iclasda AzXP-ni “bardaqxana” və “çayxana”
        adlandıraraq təhqir edib və Tural Sadıqlının seçkiləri şübhə altına
        almaq cəhdlərinə dəstək verdiyi üçün ittiham edildi. Onun bu hərəkətləri
        də AzXP-nin etik qaydalarına zidd hesab edildi və mandatdan məhrum
        edilməsi təklif edildi.
      </article>
      <article className="px-2  flex flex-col">
        <p className="font-bold"> İntizam Komissiyasının rəyi </p>
        İntizam Komissiyası rəydə qeyd etdi ki, yuxarıda adları çəkilən millət
        vəkillərinin hərəkətləri ictimai qaydada baş verdiyi üçün əlavə
        dəlillərə ehtiyac yoxdur. Komissiya, AzXP Nizamnaməsi və Reqlamenti,
        həmçinin etik davranış qaydaları əsasında bu rəyi qəbul etdi.
      </article>
      <article className="px-2">
        <p>
          Parlamentdə keçirilən gizli səsvermə nəticəsində Tural Sadıqlı,
          Əlövsət Sadıqlı, Marif Ağaməmmədov və Rəşad Dadaşovun mandatları ləğv
          edildi. Könül Əhmədova isə istefa verərək parlamentdən ayrıldı.
        </p>
      </article>
      <article className="px-2  flex font-bold">
        <p>
          Bu qərarla Azərbaycan Xalq Parlamenti öz üzvlərinin davranış
          standartlarını artırmaq və parlamentin nüfuzunu qorumaq məqsədi
          daşıyır.
        </p>
      </article>
      <article className="px-2  flex font-bold">
        <p>Azərbaycan Xalq Parlamentinin Mətbuat Xidməti</p>
      </article>
    </div>
  );
};

export default Anouncments;
