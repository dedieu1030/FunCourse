
import React from 'react';

const TermsOfService = () => {
  return (
    <div className="py-16">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">Conditions Générales d'Utilisation</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. Objet</h2>
            <p>
              Les présentes Conditions Générales d'Utilisation (ci-après "CGU") ont pour objet de définir les modalités et conditions d'utilisation des services proposés sur le site FunCours (ci-après "le Service"), ainsi que de définir les droits et obligations des parties dans ce cadre.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. Acceptation des CGU</h2>
            <p>
              L'utilisation du Service est subordonnée à l'acceptation préalable et sans réserve des présentes CGU. En accédant au Service, l'Utilisateur reconnaît avoir pris connaissance des présentes CGU et les accepter expressément sans réserve.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. Description du Service</h2>
            <p className="mb-4">
              FunCours est une plateforme en ligne permettant à ses Utilisateurs de créer, héberger et vendre des cours en ligne via un lien privé.
            </p>
            <p>
              Le Service permet aux Utilisateurs qui créent du contenu ("Formateurs") de mettre en ligne des cours comprenant du texte, des vidéos et des documents, et de les proposer gratuitement ou de manière payante à d'autres utilisateurs ("Élèves").
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. Inscription au Service</h2>
            <p className="mb-4">
              Pour utiliser le Service, l'Utilisateur doit créer un compte en fournissant les informations marquées comme obligatoires. L'Utilisateur s'engage à fournir des informations exactes, à jour et complètes.
            </p>
            <p>
              L'Utilisateur est seul responsable de la préservation de la confidentialité de son identifiant et de son mot de passe, et de toute activité résultant de l'utilisation de son identifiant et de son mot de passe.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">5. Obligations des Formateurs</h2>
            <p className="mb-4">
              Le Formateur s'engage à :
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Créer et publier du contenu dont il détient les droits ou pour lequel il a obtenu toutes les autorisations nécessaires</li>
              <li>Ne pas publier de contenu illégal, diffamatoire, pornographique, injurieux, menaçant, haineux</li>
              <li>Respecter les droits des tiers, notamment les droits de propriété intellectuelle</li>
              <li>Fournir un contenu éducatif de qualité aux élèves qui achètent ses cours</li>
              <li>Répondre aux questions des élèves dans un délai raisonnable</li>
              <li>Respecter les conditions tarifaires et les frais appliqués par FunCours</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">6. Propriété intellectuelle</h2>
            <p className="mb-4">
              Les droits de propriété intellectuelle sur les cours créés par les Formateurs restent la propriété exclusive des Formateurs. En publiant un cours sur la plateforme FunCours, le Formateur accorde à FunCours une licence non exclusive, mondiale, pour héberger, stocker, reproduire et afficher le contenu aux Élèves qui y ont accès.
            </p>
            <p>
              Les Élèves s'engagent à ne pas reproduire, télécharger, partager ou distribuer le contenu des cours sans autorisation expresse du Formateur.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">7. Conditions financières</h2>
            <p className="mb-4">
              FunCours propose un accès gratuit avec des fonctionnalités limitées et un abonnement Pro avec des fonctionnalités étendues. Les détails des offres et des tarifs sont disponibles sur la page Tarification du site.
            </p>
            <p className="mb-4">
              Pour les cours payants, FunCours prélève une commission sur chaque vente (8% sur l'offre gratuite, 3% sur l'offre Pro). Les paiements sont effectués via Stripe et versés aux Formateurs sur leur compte bancaire tous les 7 jours.
            </p>
            <p>
              Les prix sont indiqués en euros et s'entendent toutes taxes comprises.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">8. Résiliation</h2>
            <p>
              FunCours se réserve le droit de suspendre ou résilier l'accès d'un Utilisateur au Service en cas de violation des présentes CGU, sans préavis ni indemnité. Les Utilisateurs peuvent également supprimer leur compte à tout moment depuis les paramètres de leur compte.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4">9. Loi applicable et juridiction compétente</h2>
            <p>
              Les présentes CGU sont soumises au droit français. En cas de litige relatif à l'interprétation ou l'exécution des présentes CGU, les tribunaux français seront seuls compétents.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
