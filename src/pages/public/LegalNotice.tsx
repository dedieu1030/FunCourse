
import React from 'react';

const LegalNotice = () => {
  return (
    <div className="py-16">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">Mentions légales</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. Informations légales</h2>
            <p className="mb-4">
              Le site FunCours est édité par la société FunCours SAS, société par actions simplifiée au capital de 10 000 euros, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 123 456 789, dont le siège social est situé au 123 Avenue des Champs-Élysées, 75008 Paris, France.
            </p>
            <p className="mb-4">
              Numéro de TVA intracommunautaire : FR12 123 456 789<br />
              Téléphone : +33 1 23 45 67 89<br />
              Email : contact@funcours.com
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. Directeur de la publication</h2>
            <p>
              Le directeur de la publication du site FunCours est [Nom et Prénom], en qualité de Président de la société FunCours SAS.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. Hébergement</h2>
            <p>
              Le site FunCours est hébergé par la société Amazon Web Services (AWS), dont le siège social est situé au 38 Avenue John F. Kennedy, L-1855 Luxembourg.
              Téléphone : +352 26 73 38 00
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. Propriété intellectuelle</h2>
            <p className="mb-4">
              L'ensemble des éléments constituant le site FunCours (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, logos, marques, etc.) ainsi que le site lui-même, sont la propriété exclusive de FunCours SAS ou des titulaires de droits avec lesquels FunCours SAS a conclu des accords d'utilisation.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de FunCours SAS.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">5. Données personnelles</h2>
            <p>
              Les informations concernant la collecte et le traitement des données personnelles sont détaillées dans notre Politique de Confidentialité, accessible depuis la page d'accueil du site.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">6. Cookies</h2>
            <p>
              Le site FunCours utilise des cookies pour améliorer l'expérience utilisateur et proposer des contenus personnalisés. Pour plus d'informations sur l'utilisation des cookies, veuillez consulter notre Politique de Confidentialité.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4">7. Loi applicable et juridiction</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
