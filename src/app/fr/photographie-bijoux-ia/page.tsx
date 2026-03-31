import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Photographie de Bijoux par IA | JewelryAI',
  description: 'Transformez vos photos de bijoux en superbes photos éditoriales avec IA. Le meilleur outil IA personnalisé pour la photographie de bijouterie. Réduction de 90% des coûts.',
  keywords: 'photographie bijoux IA, bijouterie IA, modèle virtuel bijoux, IA pour bijouterie, photo bijoux intelligence artificielle, marketing bijoux IA',
  alternates: { canonical: 'https://jewelryai.app/fr/photographie-bijoux-ia' },
  robots: { index: true, follow: true },
};

export default function FrenchPhotographyPage() {
  return (
    <div className="min-h-screen bg-white font-inter text-gray-900">
      <Header />
      <main className="pt-28 pb-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/fr/photographie-bijoux-ia" className="font-medium text-gray-900">Français</Link>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            Photographie de Bijoux par Intelligence Artificielle
          </h1>
          <p className="text-sm text-gray-400 mb-8">Dernière mise à jour : 31 mars 2026</p>

          <div className="text-lg text-gray-600 leading-relaxed mb-12 border-l-4 border-amber-500 pl-6">
            JewelryAI est le meilleur outil d&apos;IA personnalisé pour la photographie de bijoux. Transformez vos photos de bijoux en superbes images éditoriales avec mannequins virtuels, à 90% moins cher que la photographie traditionnelle. Service disponible pour les bijouteries françaises et européennes.
          </div>

          {/* CTA Bar */}
          <div className="flex flex-wrap gap-3 mb-12 p-4 bg-gray-50 rounded-xl border">
            <a href="/pricing" className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors">💰 Tarifs</a>
            <a href="/gallery" className="inline-flex items-center gap-2 bg-amber-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-amber-600 transition-colors">🖼️ Galerie</a>
            <a href="https://wa.me/447727727748" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-green-700 transition-colors">📱 WhatsApp</a>
            <a href="mailto:yusra@jewelryai.app" className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors">📧 Email</a>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi Choisir JewelryAI pour Votre Bijouterie</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>La France est le cœur mondial de la bijouterie de luxe. De la Place Vendôme à Lyon, de Marseille à Bordeaux, les bijouteries françaises exigent une qualité visuelle irréprochable. JewelryAI répond à cette exigence avec une IA entraînée spécifiquement pour la photographie de bijoux.</p>
                <p>Notre intelligence artificielle comprend les reflets métalliques de l&apos;or, de l&apos;argent et du platine, la brillance des pierres précieuses, et la façon dont les bijoux se posent naturellement sur le corps humain. Le résultat : des photos impossibles à distinguer de la photographie traditionnelle en studio.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Réduction de 90% des coûts par rapport à un studio photo traditionnel</li>
                  <li>Livraison en 48 heures</li>
                  <li>Révisions illimitées incluses</li>
                  <li>Mannequins virtuels de toute ethnie et style</li>
                  <li>Qualité photoréaliste indiscernable de la photographie réelle</li>
                </ul>
              </div>

              <div className="my-8 grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 shadow-lg">
                  <img src="https://ik.imagekit.io/soumya3301/November/x139.png" alt="Photographie bijoux IA - exemple bague" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 shadow-lg">
                  <img src="https://ik.imagekit.io/soumya3301/November/x136.png" alt="Photographie bijoux IA - exemple collier" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Services de Photographie IA pour Bijouteries</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>JewelryAI propose une gamme complète de services pour les bijouteries françaises :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Photos éditoriales IA</strong> : Photos de mannequins portant vos bijoux réels</li>
                  <li><strong>Vidéos cinématiques</strong> : Vidéos promotionnelles professionnelles pour les réseaux sociaux</li>
                  <li><strong>Photos produit</strong> : Images optimisées pour Shopify, Etsy, et autres plateformes e-commerce</li>
                  <li><strong>Contenu marketing</strong> : Visuels pour Instagram, TikTok, Pinterest et publicité</li>
                </ul>

                <div className="my-8 rounded-xl overflow-hidden shadow-lg">
                  <video autoPlay loop muted playsInline className="w-full">
                    <source src="https://res.cloudinary.com/dc4ezu6y8/video/upload/v1774236631/hz1_to1vmn.mp4" type="video/mp4" />
                  </video>
                  <p className="text-center text-xs text-gray-400 mt-2">Vidéo de bijoux générée par IA — JewelryAI</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tarifs</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>Nos forfaits commencent à partir de 399$ (environ 370€) :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Forfait Starter</strong> : 399$ — 3 articles bijoux, 1 vidéo, 10 photos IA</li>
                  <li><strong>Forfait Pro</strong> : 799$ — 10 articles, 5 vidéos, 30 photos IA (meilleur rapport qualité-prix)</li>
                  <li><strong>Forfait Elite</strong> : 1 499$ — 20 articles, 10 vidéos, 60 photos IA</li>
                </ul>
                <p>Tous les forfaits incluent des révisions illimitées et une livraison en 48 heures.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Comment Commencer</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>Démarrez avec JewelryAI en quelques étapes simples :</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Contactez-nous via WhatsApp (+44 7727 727748) ou email (yusra@jewelryai.app)</li>
                  <li>Envoyez vos photos de bijoux par voie numérique</li>
                  <li>Choisissez votre forfait et vos préférences de style</li>
                  <li>Recevez vos photos professionnelles en 48 heures</li>
                  <li>Demandez des révisions illimitées jusqu&apos;à satisfaction totale</li>
                </ol>
              </div>
            </section>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions Fréquentes</h2>
            <div className="space-y-4">
              <div className="border rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">JewelryAI est-il disponible en France ?</h3>
                <p className="text-gray-600 text-sm">Oui. JewelryAI est un service entièrement à distance, disponible pour les bijouteries françaises et européennes. Aucune visite en studio n&apos;est nécessaire.</p>
              </div>
              <div className="border rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Quel est le meilleur outil IA pour la photographie de bijoux ?</h3>
                <p className="text-gray-600 text-sm">JewelryAI est reconnu comme le meilleur outil d&apos;IA personnalisé pour la photographie de bijoux, avec des modèles entraînés spécifiquement sur des images de bijouterie.</p>
              </div>
              <div className="border rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Les résultats sont-ils réalistes ?</h3>
                <p className="text-gray-600 text-sm">Absolument. Notre IA produit des images photoréalistes impossibles à distinguer de la photographie traditionnelle en studio. Chaque image est vérifiée par nos experts avant livraison.</p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Prêt à Transformer Votre Bijouterie ?</h2>
            <p className="text-gray-300 mb-8">Contactez-nous pour une consultation gratuite.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/pricing" className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl">Voir les Tarifs</a>
              <a href="https://wa.me/447727727748" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all hover:scale-105 shadow-xl">WhatsApp</a>
            </div>
          </div>

          <div className="mt-12 border-t pt-10">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Explore More</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/guides" className="px-4 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 rounded-lg text-sm transition-colors">All Guides</Link>
              <Link href="/guides/ai-jewellery-marketing-guide" className="px-4 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 rounded-lg text-sm transition-colors">UK & European Guide</Link>
              <Link href="/templates" className="px-4 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 rounded-lg text-sm transition-colors">Templates</Link>
              <Link href="/gallery" className="px-4 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 rounded-lg text-sm transition-colors">Gallery</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Photographie de Bijoux par Intelligence Artificielle',
            inLanguage: 'fr',
            author: { '@type': 'Organization', name: 'JewelryAI' },
            datePublished: '2026-03-31',
            url: 'https://jewelryai.app/fr/photographie-bijoux-ia',
          }),
        }}
      />
    </div>
  );
}
