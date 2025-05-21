
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="py-16">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">Politique de Confidentialité</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
            <p>
              La présente Politique de Confidentialité a pour objet d'informer les utilisateurs du site FunCours de la manière dont leurs informations personnelles sont collectées, utilisées et protégées. FunCours s'engage à respecter la vie privée des utilisateurs et à traiter leurs données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">2. Données collectées</h2>
            <p className="mb-4">
              Dans le cadre de l'utilisation du Service, FunCours collecte les données suivantes :
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Données d'identification : nom, prénom, adresse email, photo de profil (optionnelle)</li>
              <li>Données de connexion : adresse IP, date et heure de connexion</li>
              <li>Données de paiement : coordonnées bancaires (uniquement transmises à notre prestataire de paiement Stripe)</li>
              <li>Données relatives aux cours créés ou achetés</li>
              <li>Communications échangées sur la plateforme (questions-réponses)</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">3. Finalités du traitement</h2>
            <p className="mb-4">
              Les données collectées sont utilisées aux fins suivantes :
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Création et gestion du compte utilisateur</li>
              <li>Fourniture des services proposés par la plateforme</li>
              <li>Traitement des paiements et versements</li>
              <li>Communication avec les utilisateurs</li>
              <li>Prévention et détection des fraudes</li>
              <li>Amélioration de nos services</li>
              <li>Respect des obligations légales</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">4. Base légale du traitement</h2>
            <p className="mb-4">
              Le traitement des données personnelles est fondé sur les bases légales suivantes :
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>L'exécution du contrat conclu entre l'utilisateur et FunCours lors de l'utilisation de nos services</li>
              <li>Le consentement de l'utilisateur lorsque celui-ci est requis</li>
              <li>L'intérêt légitime de FunCours pour améliorer ses services</li>
              <li>Le respect des obligations légales auxquelles FunCours est soumise</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">5. Destinataires des données</h2>
            <p className="mb-4">
              Les données collectées sont destinées à FunCours ainsi qu'à ses sous-traitants qui agissent pour le compte de FunCours :
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Notre prestataire de paiement Stripe pour le traitement des paiements</li>
              <li>Nos fournisseurs d'hébergement et de services informatiques</li>
              <li>Nos prestataires de services d'analyse et de statistiques</li>
            </ul>
            <p>
              FunCours ne vend ni ne loue les données personnelles à des tiers à des fins de marketing.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">6. Durée de conservation</h2>
            <p>
              Les données personnelles sont conservées pendant la durée strictement nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, notamment pendant toute la durée d'utilisation du Service par l'utilisateur. En cas de suppression du compte, les données sont conservées pendant une durée maximale de 3 ans à compter de la suppression, sauf obligation légale de conservation plus longue.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">7. Droits des utilisateurs</h2>
            <p className="mb-4">
              Conformément à la réglementation applicable, les utilisateurs disposent des droits suivants :
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Droit d'accès : obtenir la confirmation que des données les concernant sont traitées et en obtenir une copie</li>
              <li>Droit de rectification : faire rectifier des informations inexactes ou incomplètes</li>
              <li>Droit à l'effacement : demander la suppression des données dans certains cas</li>
              <li>Droit à la limitation du traitement : demander la limitation du traitement dans certains cas</li>
              <li>Droit à la portabilité : recevoir les données dans un format structuré</li>
              <li>Droit d'opposition : s'opposer au traitement pour des raisons tenant à leur situation particulière</li>
            </ul>
            <p>
              Ces droits peuvent être exercés en envoyant un email à privacy@funcours.com ou un courrier à l'adresse du siège social de FunCours.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">8. Cookies</h2>
            <p className="mb-4">
              FunCours utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. Les cookies sont de petits fichiers texte stockés sur l'appareil de l'utilisateur.
            </p>
            <p>
              L'utilisateur peut configurer son navigateur pour refuser les cookies ou être averti lorsque des cookies sont envoyés. Toutefois, certaines fonctionnalités du site peuvent ne pas fonctionner correctement si les cookies sont désactivés.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold mb-4">9. Modifications de la Politique de Confidentialité</h2>
            <p>
              FunCours se réserve le droit de modifier la présente Politique de Confidentialité à tout moment. Les utilisateurs seront informés des modifications importantes par email ou par une notification sur le site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
