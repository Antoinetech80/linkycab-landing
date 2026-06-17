import { ArrowLeft, Shield, FileText, Mail, Info, Phone, MessageSquare, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

interface LegalPageProps {
  onBack: () => void;
  driverName?: string;
  driverBusinessName?: string;
}

export function MentionsLegales({ onBack, driverBusinessName }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans pb-16">
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center gap-4 z-40 max-w-md mx-auto">
        <button
          onClick={onBack}
          className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Retour"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-bold tracking-tight">Mentions Légales</h1>
      </header>

      <main className="max-w-md mx-auto px-6 pt-6 space-y-6">
        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <div className="flex items-center gap-3 text-[#FF6B3D] mb-2">
            <Info size={24} />
            <h2 className="text-lg font-bold">Éditeur du site et de l'application</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Le site linkycab.com et l'application LinkyCab sont édités par :
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>
              <span className="font-semibold text-gray-800">ACH CAB</span>
              <br />
              <span className="text-gray-500">Nom commercial de Antoine Achille, entrepreneur individuel (EI)</span>
            </li>
            <li>SIREN : 749 848 347</li>
            <li>Adresse administrative : 59170 Croix, France</li>
            <li>Adresse complète communiquée sur demande légitime adressée par email</li>
            <li>Email : <a href="mailto:support@linkycab.com" className="text-[#FF6B3D] hover:underline font-semibold">support@linkycab.com</a></li>
          </ul>
          <p className="text-sm text-gray-600 leading-relaxed pt-2">
            Directeur de la publication : Antoine Achille<br />
            Domaine principal : linkycab.com<br />
            Application : app.linkycab.com
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">Présentation du service</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab est une application web destinée aux professionnels du transport de personnes, notamment les chauffeurs VTC, chauffeurs privés, exploitants de transport et professionnels utilisant une carte numérique de présentation.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            L'application permet de créer, personnaliser et diffuser une carte numérique professionnelle accessible par lien direct, QR code ou raccourci mobile.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Chaque carte chauffeur, page publique, lien personnalisé ou QR code généré via l'application est renseigné et utilisé sous la responsabilité du professionnel concerné.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab fournit un outil technique de création, d'hébergement et de diffusion de cartes numériques professionnelles. Chaque utilisateur reste seul responsable des informations publiées sur sa carte, notamment : nom commercial, téléphone, email, photo, logo, liens externes, avis Google, WhatsApp, documents, textes, visuels, coordonnées professionnelles et toute autre information affichée publiquement.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">Hébergement</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Le site et l'application sont hébergés par :
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>Vercel Inc.</li>
            <li>440 N Barranca Ave #4133</li>
            <li>Covina, CA 91723</li>
            <li>États-Unis</li>
            <li>Site internet : vercel.com</li>
          </ul>
          <p className="text-sm text-gray-600 leading-relaxed pt-2">
            Gestion du domaine et/ou de l'email professionnel :
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>Hostinger International Ltd.</li>
            <li>61 Lordou Vironos Street</li>
            <li>6023 Larnaca</li>
            <li>Chypre</li>
            <li>Site internet : hostinger.fr</li>
          </ul>
          <p className="text-sm text-gray-600 leading-relaxed pt-2">
            Certaines fonctionnalités techniques peuvent également s'appuyer sur des services tiers nécessaires au fonctionnement de l'application, notamment pour l'authentification, la base de données, le stockage, la sécurité, l'analyse technique, la facturation, le paiement ou la maintenance du service.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">Propriété intellectuelle</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            L'ensemble des éléments présents sur le site et l'application LinkyCab, notamment les textes, interfaces, graphismes, logos, noms, structures, fonctionnalités, bases de données, codes, visuels et éléments techniques, sont protégés par le droit de la propriété intellectuelle.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Toute reproduction, représentation, modification, extraction, diffusion, réutilisation ou exploitation non autorisée, totale ou partielle, des éléments du site ou de l'application est interdite sans accord écrit préalable.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Le nom LinkyCab, l'identité visuelle, les interfaces et les fonctionnalités propres à l'application ne peuvent pas être copiés, reproduits ou exploités dans le cadre d'un service concurrent ou similaire.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Les contenus ajoutés par les utilisateurs sur leurs cartes professionnelles restent sous leur responsabilité. L'utilisateur garantit disposer des droits nécessaires sur les textes, images, logos, photos, liens, documents ou informations qu'il publie via l'application.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">Responsabilité</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab met à disposition un outil numérique permettant aux professionnels du transport de créer et diffuser une carte professionnelle en ligne.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab ne vérifie pas systématiquement l'exactitude, la légalité ou l'actualité des informations publiées par les utilisateurs sur leurs cartes.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Chaque utilisateur est seul responsable des informations qu'il renseigne, publie, modifie ou partage via l'application. Il lui appartient de s'assurer que les informations affichées sont exactes, à jour, licites et conformes à son activité professionnelle.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab ne peut être tenu responsable des erreurs, omissions, informations inexactes, contenus trompeurs, liens externes, avis clients, documents ou coordonnées publiés par les utilisateurs.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab peut suspendre, limiter ou supprimer l'accès à une carte ou à un compte utilisateur en cas d'usage abusif, frauduleux, illicite, contraire aux présentes mentions ou portant atteinte à l'image du service.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">Contact</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Pour toute question, l'éditeur peut être contacté à l'adresse suivante :<br />
            <a href="mailto:support@linkycab.com" className="font-semibold text-[#FF6B3D] hover:underline">support@linkycab.com</a>
          </p>
        </div>

        <div className="text-center pt-4">
          <p className="text-[10px] text-gray-400">© {new Date().getFullYear()} LinkyCab Chauffeur Privé · Tous droits réservés.</p>
        </div>
      </main>
    </div>
  );
}

export function PolitiqueConfidentialite({ onBack }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans pb-16">
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center gap-4 z-40 max-w-md mx-auto">
        <button
          onClick={onBack}
          className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Retour"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-bold tracking-tight">Confidentialité</h1>
      </header>

      <main className="max-w-md mx-auto px-6 pt-6 space-y-6">
        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <div className="flex items-center gap-3 text-[#FF6B3D] mb-2">
            <Shield size={24} />
            <h2 className="text-lg font-bold">1. Objet</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            La présente Politique de confidentialité explique comment LinkyCab collecte, utilise, conserve et protège les données personnelles des utilisateurs du site linkycab.com et de l'application LinkyCab.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">2. Responsable du traitement</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Le responsable du traitement est :
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Antoine Achille, entrepreneur individuel<br />
            SIREN : 749 848 347<br />
            Email : <a href="mailto:support@linkycab.com" className="text-[#FF6B3D] hover:underline font-semibold">support@linkycab.com</a>
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">3. Données collectées</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Dans le cadre de l'utilisation de LinkyCab, les données suivantes peuvent être collectées :
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>nom et prénom ;</li>
            <li>nom commercial ou marque utilisée ;</li>
            <li>adresse email ;</li>
            <li>numéro de téléphone professionnel ;</li>
            <li>photo de profil ou logo ;</li>
            <li>liens externes ajoutés par l'utilisateur ;</li>
            <li>lien WhatsApp ;</li>
            <li>lien Google avis ;</li>
            <li>informations visibles sur la carte chauffeur ;</li>
            <li>identifiant utilisateur ;</li>
            <li>données de connexion ;</li>
            <li>données techniques nécessaires au fonctionnement du service ;</li>
            <li>données relatives à l'abonnement ;</li>
            <li>données de facturation ;</li>
            <li>données de paiement traitées par Stripe ;</li>
            <li>messages ou demandes envoyés au support.</li>
          </ul>
          <p className="text-sm text-gray-600 leading-relaxed pt-2">
            LinkyCab ne collecte pas les données complètes de carte bancaire. Ces données sont traitées directement par Stripe.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">4. Données visibles publiquement</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Les informations ajoutées par l'utilisateur sur sa carte chauffeur peuvent être visibles publiquement par toute personne disposant du lien, du QR code ou de l'accès à la carte.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            L'utilisateur reconnaît que les informations qu'il choisit de publier sur sa carte sont destinées à être consultées par des clients, prospects ou tiers.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            L'utilisateur peut modifier ou supprimer certaines informations depuis son espace personnel, selon les fonctionnalités disponibles dans l'application.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">5. Finalités du traitement</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Les données collectées sont utilisées pour :
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>créer et gérer le compte utilisateur ;</li>
            <li>générer une carte numérique professionnelle ;</li>
            <li>permettre l'affichage public des informations choisies par l'utilisateur ;</li>
            <li>assurer le fonctionnement technique de l'application ;</li>
            <li>sécuriser l'accès au service ;</li>
            <li>gérer les abonnements ;</li>
            <li>gérer les paiements et la facturation ;</li>
            <li>assurer le support client ;</li>
            <li>améliorer l'expérience utilisateur ;</li>
            <li>détecter les erreurs techniques ;</li>
            <li>prévenir les abus, fraudes ou usages illicites ;</li>
            <li>respecter les obligations légales applicables.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">6. Bases légales</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Les traitements de données réalisés par LinkyCab reposent notamment sur :
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>l'exécution du contrat ou du service demandé par l'utilisateur ;</li>
            <li>l'intérêt légitime de LinkyCab à assurer le bon fonctionnement, la sécurité et l'amélioration du service ;</li>
            <li>le consentement de l'utilisateur lorsque celui-ci est requis ;</li>
            <li>le respect d'obligations légales, notamment comptables ou fiscales.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">7. Services tiers</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Pour assurer le fonctionnement de LinkyCab, certaines données peuvent être traitées par des prestataires techniques, notamment :
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>hébergement applicatif ;</li>
            <li>gestion du domaine ;</li>
            <li>authentification ;</li>
            <li>base de données ;</li>
            <li>stockage ;</li>
            <li>paiement ;</li>
            <li>facturation ;</li>
            <li>sécurité ;</li>
            <li>analyse technique ;</li>
            <li>support.</li>
          </ul>
          <p className="text-sm text-gray-600 leading-relaxed pt-2">
            Ces prestataires n'ont accès aux données que dans la limite nécessaire à la réalisation de leurs services.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">8. Conservation des données</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Les données sont conservées pendant la durée d'utilisation du service par l'utilisateur.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            En cas de suppression du compte ou de demande de suppression, les données peuvent être supprimées ou anonymisées, sauf obligation légale ou nécessité de conservation temporaire pour la preuve, la sécurité, la facturation ou la gestion d'un litige.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Les données de facturation peuvent être conservées pendant les durées légales applicables aux obligations comptables et fiscales.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">9. Sécurité</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab met en œuvre des mesures raisonnables pour protéger les données contre l'accès non autorisé, la perte, l'altération, la divulgation ou la destruction.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            L'utilisateur reste responsable de la confidentialité de ses identifiants de connexion.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">10. Transfert hors Union européenne</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Certains prestataires techniques utilisés par LinkyCab peuvent être situés en dehors de l'Union européenne.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Dans ce cas, LinkyCab veille à ce que les transferts soient encadrés conformément à la réglementation applicable.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">11. Droits des utilisateurs</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Conformément à la réglementation applicable, l'utilisateur peut demander :
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>l'accès à ses données ;</li>
            <li>la rectification de ses données ;</li>
            <li>la suppression de ses données ;</li>
            <li>la limitation du traitement ;</li>
            <li>l'opposition au traitement ;</li>
            <li>la portabilité de ses données lorsque cela est applicable.</li>
          </ul>
          <p className="text-sm text-gray-600 leading-relaxed pt-2">
            Toute demande peut être adressée à :<br />
            <a href="mailto:support@linkycab.com" className="font-semibold text-[#FF6B3D] hover:underline">support@linkycab.com</a>
          </p>
          <p className="text-sm text-gray-600 leading-relaxed pt-2">
            Une vérification d'identité pourra être demandée en cas de doute raisonnable sur l'identité du demandeur.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">12. Réclamation</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            L'utilisateur dispose également du droit d'introduire une réclamation auprès de l'autorité compétente en matière de protection des données personnelles.
          </p>
        </div>

        <div className="text-center pt-4">
          <p className="text-[10px] text-gray-400">© {new Date().getFullYear()} LinkyCab · Tous droits réservés.</p>
        </div>
      </main>
    </div>
  );
}

export function ConditionsUtilisation({ onBack }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans pb-16">
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center gap-4 z-40 max-w-md mx-auto">
        <button
          onClick={onBack}
          className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Retour"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-bold tracking-tight">Conditions d'Utilisation</h1>
      </header>

      <main className="max-w-md mx-auto px-6 pt-6 space-y-6">
        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <div className="flex items-center gap-3 text-[#FF6B3D] mb-2">
            <FileText size={24} />
            <h2 className="text-lg font-bold">1. Objet</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Les présentes Conditions Générales d'Utilisation encadrent l'accès et l'utilisation du site linkycab.com et de l'application LinkyCab.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab permet aux professionnels du transport de créer, personnaliser et diffuser une carte numérique professionnelle accessible par lien direct, QR code ou raccourci mobile.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">2. Acceptation des conditions</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            L'utilisation de LinkyCab implique l'acceptation pleine et entière des présentes Conditions Générales d'Utilisation.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            L'utilisateur reconnaît avoir pris connaissance des présentes conditions avant d'utiliser le service.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">3. Accès au service</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            L'accès à certaines fonctionnalités nécessite la création d'un compte utilisateur.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            L'utilisateur s'engage à fournir des informations exactes, complètes, à jour et conformes à son activité professionnelle.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            L'utilisateur est responsable de la confidentialité de ses identifiants de connexion et de toute activité réalisée depuis son compte.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">4. Usage professionnel</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab est destiné à un usage professionnel.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            L'utilisateur déclare utiliser le service dans le cadre de son activité de transport de personnes, de chauffeur privé, de chauffeur VTC ou d'une activité professionnelle similaire.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">5. Carte numérique professionnelle</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            L'utilisateur peut créer une carte numérique contenant des informations professionnelles, telles que :
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>nom et prénom ;</li>
            <li>nom commercial ;</li>
            <li>photo ou logo ;</li>
            <li>téléphone professionnel ;</li>
            <li>email professionnel ;</li>
            <li>lien WhatsApp ;</li>
            <li>lien Google avis ;</li>
            <li>liens externes ;</li>
            <li>informations de présentation ;</li>
            <li>QR code ou lien public.</li>
          </ul>
          <p className="text-sm text-gray-600 leading-relaxed pt-2">
            Les informations ajoutées sur la carte peuvent être visibles publiquement par toute personne disposant du lien ou du QR code.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            L'utilisateur est seul responsable des informations publiées sur sa carte numérique.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">6. Obligations de l'utilisateur</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            L'utilisateur s'engage à ne pas :
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>publier d'informations fausses, trompeuses ou illicites ;</li>
            <li>usurper l'identité d'un tiers ;</li>
            <li>publier des contenus portant atteinte aux droits d'autrui ;</li>
            <li>utiliser des photos, logos ou documents sans autorisation ;</li>
            <li>diffuser des contenus frauduleux, injurieux, discriminatoires, illégaux ou contraires à l'ordre public ;</li>
            <li>détourner l'usage normal du service ;</li>
            <li>tenter d'accéder frauduleusement aux comptes, données ou systèmes de LinkyCab ;</li>
            <li>perturber le fonctionnement technique de l'application.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">7. Protection du service, interdiction de copie et d'extraction</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Les éléments composant LinkyCab, notamment le nom, le logo, les textes, interfaces, graphiques, fonctionnalités, codes, structures, visuels, contenus, écrans et parcours utilisateurs, sont protégés par le droit de la propriété intellectuelle.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            L'utilisation du service ne confère à l'utilisateur aucun droit de propriété sur LinkyCab.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            L'utilisateur s'interdit, directement ou indirectement, sans autorisation écrite préalable :
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>de copier, reproduire, adapter, modifier, traduire ou créer une œuvre dérivée à partir de tout ou partie du service LinkyCab ;</li>
            <li>d'extraire, aspirer, collecter, scraper, indexer ou réutiliser de manière automatisée tout ou partie des contenus, données, interfaces, structures, écrans, parcours utilisateurs, éléments graphiques ou fonctionnalités du service ;</li>
            <li>d'utiliser des robots, scripts, crawlers, outils d'automatisation ou tout procédé similaire pour accéder au service, collecter des informations ou analyser son fonctionnement ;</li>
            <li>de tenter de décompiler, désassembler, procéder à de l'ingénierie inverse ou analyser le code source, l'architecture, la logique technique ou les mécanismes internes du service, sauf dans les cas strictement autorisés par la loi ;</li>
            <li>d'utiliser LinkyCab dans le but de développer, faire développer, commercialiser ou améliorer un service, logiciel ou application concurrente ;</li>
            <li>de détourner l'usage normal du service à des fins de veille concurrentielle, benchmark systématique, reproduction fonctionnelle ou exploitation commerciale non autorisée.</li>
          </ul>
          <p className="text-sm text-gray-600 leading-relaxed pt-2">
            Toute violation de cette clause pourra entraîner la suspension ou la suppression du compte utilisateur, sans préjudice des actions que LinkyCab pourrait engager pour faire valoir ses droits.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">8. Suspension ou suppression du compte</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab se réserve le droit de suspendre, limiter ou supprimer l'accès à tout compte ou carte en cas :
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>d'usage abusif ;</li>
            <li>de contenu illicite ;</li>
            <li>de tentative de fraude ;</li>
            <li>d'atteinte à la sécurité du service ;</li>
            <li>de non-respect des présentes conditions ;</li>
            <li>d'utilisation susceptible de nuire à l'image ou au bon fonctionnement de LinkyCab.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">9. Disponibilité du service</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab met en œuvre des moyens raisonnables pour assurer l'accès au service.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Toutefois, l'accès peut être interrompu temporairement pour maintenance, mise à jour, incident technique, force majeure ou intervention d'un prestataire tiers.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab ne garantit pas une disponibilité permanente et ininterrompue du service.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">10. Modification du service</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab peut faire évoluer, modifier, améliorer, suspendre ou supprimer certaines fonctionnalités du service afin d'assurer sa maintenance, son amélioration ou son adaptation technique.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">11. Droit applicable</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Les présentes conditions sont soumises au droit français.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            En cas de litige, les parties chercheront prioritairement une solution amiable avant toute action judiciaire.
          </p>
        </div>

        <div className="text-center pt-4">
          <p className="text-[10px] text-gray-400">© {new Date().getFullYear()} LinkyCab Chauffeur Privé · Tous droits réservés.</p>
        </div>
      </main>
    </div>
  );
}

export function ConditionsGeneralesVente({ onBack }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans pb-16">
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center gap-4 z-40 max-w-md mx-auto">
        <button
          onClick={onBack}
          className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Retour"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-bold tracking-tight">Conditions de Vente</h1>
      </header>

      <main className="max-w-md mx-auto px-6 pt-6 space-y-6">
        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <div className="flex items-center gap-3 text-[#FF6B3D] mb-2">
            <FileText size={24} />
            <h2 className="text-lg font-bold">1. Objet</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Les présentes Conditions Générales de Vente encadrent la vente des abonnements proposés par LinkyCab.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab est un service numérique permettant aux professionnels du transport de créer, personnaliser, héberger et diffuser une carte numérique professionnelle.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">2. Éditeur</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Le service LinkyCab est édité par :
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Antoine Achille, entrepreneur individuel<br />
            SIREN : 749 848 347<br />
            Adresse administrative : 59170 Croix, France<br />
            Email : <a href="mailto:support@linkycab.com" className="text-[#FF6B3D] hover:underline font-semibold">support@linkycab.com</a>
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">3. Client concerné</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Le service est destiné aux professionnels du transport de personnes, notamment les chauffeurs VTC, chauffeurs privés, exploitants de transport ou professionnels similaires.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            En souscrivant à LinkyCab, le client déclare agir dans le cadre de son activité professionnelle.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">4. Offres et abonnements</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab propose des abonnements mensuels et/ou annuels donnant accès aux fonctionnalités du service.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Les fonctionnalités incluses peuvent comprendre notamment :
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>création d'une carte numérique professionnelle ;</li>
            <li>personnalisation du profil ;</li>
            <li>génération ou utilisation d'un lien public ;</li>
            <li>diffusion par QR code ;</li>
            <li>accès à l'espace utilisateur ;</li>
            <li>modification des informations affichées ;</li>
            <li>hébergement de la carte pendant la durée de l'abonnement actif.</li>
          </ul>
          <p className="text-sm text-gray-600 leading-relaxed pt-2">
            Le détail des offres, fonctionnalités et prix est présenté sur le site ou dans l'application au moment de la souscription.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">5. Prix</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Les prix sont indiqués en euros.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Selon la situation applicable, les prix peuvent être affichés hors taxes ou toutes taxes comprises.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Le prix applicable est celui affiché au moment de la souscription.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab se réserve le droit de modifier ses tarifs à tout moment. Les modifications tarifaires ne s'appliquent pas rétroactivement aux périodes déjà payées.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">6. Paiement</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Le paiement des abonnements est réalisé via le prestataire de paiement Stripe.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab ne collecte pas et ne conserve pas les données complètes de carte bancaire. Ces données sont traitées directement par Stripe.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Le client est responsable de l'exactitude des informations de paiement et de facturation transmises lors de la souscription.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">7. Facturation</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Une facture ou un justificatif de paiement peut être généré via le système de paiement ou l'espace client, selon les fonctionnalités disponibles.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Le client s'engage à fournir des informations de facturation exactes et à jour.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">8. Durée de l'abonnement</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            L'abonnement est souscrit pour une durée mensuelle ou annuelle selon l'offre choisie.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Sauf résiliation, l'abonnement est renouvelé automatiquement à chaque échéance pour une période équivalente.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">9. Résiliation</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Le client peut résilier son abonnement à tout moment depuis son espace utilisateur ou via le portail de gestion de paiement mis à disposition.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            La résiliation prend effet à la fin de la période d'abonnement déjà payée.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Aucun remboursement prorata temporis n'est effectué pour une période d'abonnement en cours, sauf obligation légale ou décision commerciale exceptionnelle de LinkyCab.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">10. Défaut de paiement</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            En cas d'échec de paiement, d'expiration du moyen de paiement ou d'impayé, l'accès au service peut être limité, suspendu ou supprimé après tentative de relance.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab se réserve le droit de désactiver temporairement ou définitivement une carte numérique en cas d'abonnement inactif ou impayé.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">11. Essai gratuit ou offre promotionnelle</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab peut proposer une période d'essai gratuite ou une offre promotionnelle.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Les conditions de l'offre sont précisées au moment de l'inscription ou de la souscription.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            À l'issue de la période d'essai, l'accès au service peut nécessiter la souscription d'un abonnement payant.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">12. Droit de rétractation</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Le service LinkyCab est destiné à un usage professionnel.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorsque le client agit exclusivement dans le cadre de son activité professionnelle, les règles relatives au droit de rétractation des consommateurs ne s'appliquent pas.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Si une situation particulière impose l'application d'un droit de rétractation, celle-ci sera traitée conformément à la réglementation applicable.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">13. Responsabilité</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab fournit un outil technique de création, d'hébergement et de diffusion de cartes numériques professionnelles.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab ne garantit pas que l'utilisation du service générera un nombre déterminé de clients, de réservations, d'avis, de contacts ou de chiffre d'affaires.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Le client reste seul responsable des informations publiées sur sa carte, de la conformité de son activité professionnelle et de l'utilisation commerciale qu'il fait du service.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">14. Modification des offres</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab peut faire évoluer ses offres, fonctionnalités ou tarifs.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Les utilisateurs seront informés en cas de modification significative affectant leur abonnement.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">15. Droit applicable et litiges</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Les présentes Conditions Générales de Vente sont soumises au droit français.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            En cas de litige, les parties chercheront prioritairement une solution amiable avant toute action judiciaire.
          </p>
        </div>

        <div className="text-center pt-4">
          <p className="text-[10px] text-gray-400">© {new Date().getFullYear()} LinkyCab · Tous droits réservés.</p>
        </div>
      </main>
    </div>
  );
}

export function PolitiqueCookies({ onBack }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans pb-16">
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center gap-4 z-40 max-w-md mx-auto">
        <button
          onClick={onBack}
          className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Retour"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-bold tracking-tight">Politique de Cookies</h1>
      </header>

      <main className="max-w-md mx-auto px-6 pt-6 space-y-6">
        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <div className="flex items-center gap-3 text-[#FF6B3D] mb-2">
            <Shield size={24} />
            <h2 className="text-lg font-bold">1. Objet</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            La présente Politique de cookies explique comment LinkyCab utilise les cookies et technologies similaires sur le site linkycab.com et l’application LinkyCab.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">2. Qu’est-ce qu’un cookie ?</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Un cookie est un petit fichier ou traceur pouvant être déposé sur le terminal de l’utilisateur lors de sa navigation sur un site ou une application.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Il peut permettre notamment de faire fonctionner le service, sécuriser une session, mémoriser certaines préférences ou mesurer l’utilisation du site.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">3. Cookies strictement nécessaires</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab peut utiliser des cookies ou technologies similaires strictement nécessaires au fonctionnement du service.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Ces cookies peuvent permettre notamment :
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            <li>la connexion au compte utilisateur ;</li>
            <li>la sécurisation de la session ;</li>
            <li>la mémorisation de certaines préférences ;</li>
            <li>le bon fonctionnement technique de l’application ;</li>
            <li>la prévention des erreurs ou abus ;</li>
            <li>l’accès aux fonctionnalités essentielles.</li>
          </ul>
          <p className="text-sm text-gray-600 leading-relaxed pt-2">
            Ces cookies sont nécessaires au fonctionnement du service et ne nécessitent pas de consentement préalable.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">4. Cookies de mesure et d'analyse</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab peut utiliser des outils de mesure d’audience ou d’analyse afin de comprendre l’utilisation du service, améliorer l’interface, détecter les erreurs et optimiser les fonctionnalités.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorsque ces outils ne sont pas strictement nécessaires au fonctionnement du service, ils peuvent nécessiter le consentement préalable de l’utilisateur.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">5. Cookies publicitaires ou marketing</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab peut être amené à utiliser des cookies ou traceurs marketing, notamment pour mesurer l’efficacité de campagnes publicitaires ou améliorer la communication du service.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorsque ces cookies ne sont pas strictement nécessaires, they ne sont déposés qu’après consentement de l’utilisateur.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">6. Gestion du consentement</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorsqu’un consentement est requis, l’utilisateur peut accepter, refuser ou modifier ses préférences via le bandeau ou le module de gestion des cookies proposé sur le site ou l’application.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            L’utilisateur peut également configurer son navigateur pour bloquer ou supprimer certains cookies.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Le refus de certains cookies peut limiter certaines fonctionnalités non essentielles, sans empêcher l’accès aux fonctions principales du service.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">7. Durée de conservation</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Les cookies sont conservés pour une durée limitée, proportionnée à leur finalité.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Les choix de consentement de l’utilisateur peuvent également être conservés afin d’éviter de lui redemander son choix à chaque visite.
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <h3 className="font-bold text-[16px] text-gray-950">8. Modification de la politique de cookies</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            LinkyCab peut modifier la présente Politique de cookies afin de tenir compte des évolutions techniques, réglementaires ou fonctionnelles du service.
          </p>
        </div>

        <div className="text-center pt-4">
          <p className="text-[10px] text-gray-400">© {new Date().getFullYear()} LinkyCab · Tous droits réservés.</p>
        </div>
      </main>
    </div>
  );
}

export function ContactCorporate({ onBack, driverBusinessName }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans pb-16">
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center gap-4 z-40 max-w-md mx-auto">
        <button
          onClick={onBack}
          className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Retour"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-lg font-bold tracking-tight">Contact support</h1>
      </header>

      <main className="max-w-md mx-auto px-6 pt-6 space-y-6">
        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-4">
          <div className="flex items-center gap-3 text-[#FF6B3D] mb-2">
            <Mail size={24} />
            <h2 className="text-lg font-bold">Entrer en contact</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Vous avez une suggestion concernant l'application, un signalement ou un besoin d'assistance technique ?
          </p>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.03)] space-y-6">
          <h3 className="font-bold text-[16px] text-gray-950">Canaux officiels</h3>
          <div className="space-y-4 text-xs font-medium text-gray-700">
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
              <Mail size={16} className="text-[#FF6B3D] mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] text-gray-400 tracking-wider">Email support et réclamations</p>
                <a href="mailto:support@linkycab.com" className="hover:underline text-[13px] font-bold text-gray-900">
                  support@linkycab.com
                </a>
              </div>
            </div>

            {driverBusinessName && (
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                <Info size={16} className="text-gray-400 mt-0.5 shrink-0" />
                <div className="text-xs text-gray-500 leading-relaxed">
                  Pour contacter directement {driverBusinessName}, veuillez utiliser les boutons d'appel direct, d'envoi SMS ou de messagerie WhatsApp présents sur l'écran d'accueil de la carte chauffeur privé.
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="text-center pt-4">
          <p className="text-[10px] text-gray-400">© {new Date().getFullYear()} LinkyCab Chauffeur Privé · Tous droits réservés.</p>
        </div>
      </main>
    </div>
  );
}
