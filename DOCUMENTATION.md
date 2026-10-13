# Documentation — Portfolio public

## Journal de conception

### 13 octobre 2026 — Retour utilisateur externe / recadrage du portfolio

Un premier retour externe approfondi sur le portfolio a mis en évidence deux problèmes structurels récurrents.

#### 1. N.O.X. est spontanément interprété comme un produit

Le lecteur comprend globalement ce que fait N.O.X. (agent IA, sources multiples, traitement en temps réel, décision de répondre ou non), mais cherche immédiatement :
- à quoi sert le produit ;
- quelle est sa cible ;
- quels sont ses cas d'usage ;
- quelle problématique produit il résout.

Ce comportement avait déjà été observé lors de présentations précédentes. Il ne doit donc plus être traité comme un simple problème de formulation : le portfolio installe actuellement le mauvais modèle mental.

**Décision de conception :** N.O.X. ne doit plus être le personnage principal du portfolio.

Le portfolio doit d'abord présenter **la démarche de conception** :
problème → contraintes → hypothèse → choix des outils → prototype → test/mesure → itération → documentation.

N.O.X. devient le **terrain d'expérimentation** dans lequel cette démarche produit des preuves. Shadow Mode, Kiroshi, routage, personnalité, etc. doivent être présentés comme des **études de cas de conception**, et non comme une collection de fonctionnalités destinées à vendre N.O.X.

La question à laquelle le portfolio doit répondre n'est donc plus principalement « Qu'est-ce que N.O.X. ? », mais « Comment Alexy aborde-t-il et résout-il un problème de conception numérique ? ».

#### 2. L'utilisation de l'IA est perceptible

Le retour externe indique clairement que l'assistance IA dans la fabrication du portfolio est identifiable.

**Décision : ne pas chercher à masquer cette utilisation.**

Un préambule doit être ajouté à la homepage afin d'établir explicitement le contrat de lecture et les principes fondateurs :
- l'IA fait partie de l'atelier et du processus de production ;
- elle peut servir à explorer, prototyper, coder, confronter des idées et accélérer l'exécution ;
- la responsabilité de la conception reste humaine : définition du problème et des contraintes, choix des outils, arbitrage, contrôle qualité, tests, validation ou rejet des propositions ;
- le portfolio ne cherche pas à démontrer une production « sans IA », mais une capacité à concevoir avec les outils disponibles sans leur déléguer la décision ;
- N.O.X. est un terrain d'expérimentation de cette démarche, pas un produit présenté à la commercialisation.

Ce préambule devra rester cohérent avec la future section **Éthique & contraintes de conception**, qui développera les limites, arbitrages et principes plutôt que de répéter l'introduction.

#### 3. Retours UX à traiter

Le test externe signale également :
- incohérences de navigation / menus ;
- tailles de police à harmoniser ;
- difficulté à savoir où l'on se trouve dans le portfolio ;
- architecture générale parfois déroutante.

Ces points seront traités après le recadrage narratif : l'architecture de navigation doit servir le nouveau modèle mental plutôt que simplement corriger la surface.

#### 4. Le retour externe devient lui-même une preuve de méthode

Le cycle en cours constitue un cas concret de la démarche revendiquée :

**production assistée → test humain externe → défaut structurel identifié → décision de conception → itération.**

Le portfolio doit pouvoir montrer cette capacité à soumettre une solution à un regard extérieur et à modifier sa structure lorsque le test invalide une hypothèse.

---

> Note de confidentialité : les carnets de développement privés de N.O.X./NoxLab restent hors du portfolio public. Seules des synthèses, décisions de conception et preuves sélectionnées doivent être exposées.
