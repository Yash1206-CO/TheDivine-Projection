import { Deity } from '../types';

export const DEITIES: Deity[] = [
  {
    id: 'vishnu',
    name: 'Lord Vishnu',
    sanskritName: 'श्री विष्णु',
    title: 'The Infinite Preserver',
    tagline: 'Sustainer of cosmic order and righteous Dharma across the cycles of Yugas',
    mantra: 'ॐ नमो भगवते वासुदेवाय',
    mantraTranslation: 'Om Namo Bhagavate Vasudevaya - "Salutations to the Supreme Lord who dwells in all hearts"',
    residence: 'Kshira Sagara (The Milk Ocean), Vaikuntha',
    mount: 'Garuda (The Celestial Eagle)',
    element: 'Akasha (Ether) & Cosmic Order',
    weapons: ['Sudarshana Chakra (Discus)', 'Panchajanya (Shankha/Conch)', 'Kaumodaki (Gada/Mace)'],
    template: 'A',
    category: 'Trideva',
    colorTheme: {
      primary: '#D4AF37',
      accent: '#3b82f6', // Ocean Sapphire
      bgGradient: 'from-[#0d1e36] via-[#091322] to-[#040912]',
      cardBg: 'bg-[#121b29]'
    },
    overview: 'Lord Vishnu is the preserving, protecting, and managing deity of the universe within the divine Trimurti. Whenever chaos and evil threaten to overwhelm cosmic balance, Vishnu incarnates into earthly forms (avatars) to defend righteousness.',
    pages: [
      {
        pageNumber: 1,
        title: 'Maha-Vishnu',
        subtitle: 'The Lord of Preservation & Vaikuntha',
        type: 'cover',
        visualElement: { type: 'mandala', details: 'Sudarshana' },
        content: [
          'Lord Vishnu is the supreme agent of preservation within the Hindu Trinity. Boundless and absolute, He resides in the eternal, transcendent realm of Vaikuntha—specifically floating on the celestial Milk Ocean (Kshira Sagara) upon the coiled body of the mighty thousand-headed serpent, Sheshanaga (or Ananta Shesha).',
          'From this serene, floating state of yoga-nidra, He oversees the intricate tapestry of the universe. He is the embodying spirit of absolute cosmic harmony (Rita) and righteousness (Dharma), manifesting whenever creation tilts towards moral decay and spiritual darkness.',
          'His consort, Sri Lakshmi, resides at His side, representing wealth, beauty, and cosmic abundance. Together, they represent the dynamic balance of supreme consciousness and material manifest prosperity, ensuring that the earthly and heavenly planes thrive in unity.'
        ]
      },
      {
        pageNumber: 2,
        title: 'Core History & Philosophy',
        subtitle: 'The Serpent of Eternity & Srishti',
        type: 'philosophy',
        visualElement: { type: 'icon', iconName: 'Compass' },
        content: [
          'In Hindu cosmology, time is cyclical rather than linear, alternating between periods of cosmic manifestation (Kalpas) and dissolution (Pralayas). During the long night of dissolution, Vishnu rests, withdrawn into Himself, as the unmanifest seed of all existence.',
          'Upon Shesha—repesenting "that which remains" when everything else is destroyed—Vishnu meditates. From His navel sprouts a majestic lotus flower, upon which Lord Brahma manifests to begin the physical engineering of the next universe. This process repeats across eternal cosmic epochs.',
          'Thus, Vishnu is not merely a single personified deity active within a historical timeline, but rather the underlying canvas of absolute consciousness. He is the quiet space within which all stars, life, and thoughts are born, sustained, and ultimately re-absorbed, remaining completely immaculate in His absolute state.'
        ]
      },
      {
        pageNumber: 3,
        title: 'Matsya Avatar',
        subtitle: 'Incarnation I: The Sacred Fish of the Deluge',
        type: 'narrative',
        visualElement: { type: 'scene', details: 'Golden Fish guiding the ship through waves' },
        content: [
          'At the close of the Satya Yuga, the initial era of truth, the world became corrupt and a massive flood of absolute dissolution (Pralaya) threatened to swallow all of creation. It was also at this time that the horse-faced demon Hayagriva stole the sacred Vedas from Lord Brahma while he slept.',
          'To preserve the seeds of life and reclaim the divine scriptures, Lord Vishnu assumed the form of Matsya, a beautiful, tiny fish. He appeared before the righteous King Satyavrata (Manu) as he offered prayers in the river, asking for protection.',
          'Manu kept the fish, which grew with astonishing rapidity, eventually requiring the vast ocean. Matsya then instructed Manu to build a massive ship. When the celestial storm broke, Matsya, now a colossal golden fish with a great horn, guided the ship tied to Vasuki the serpent through the raging waters, carrying Manu, the Saptarishis (seven sages), and the seeds of all living organisms. Matsya then slew Hayagriva, returning the Vedas to preserve spiritual wisdom.'
        ]
      },
      {
        pageNumber: 4,
        title: 'Kurma Avatar',
        subtitle: 'Incarnation II: The Cosmic Tortoise Support',
        type: 'narrative',
        visualElement: { type: 'scene', details: 'Tortoise holding Mount Mandara during churning' },
        content: [
          'The Devas (demigods) had lost their strength and immortality due to a curse from Sage Durvasa. Desperate to regain their lost glory, they formed a temporary alliance with the Asuras (demons) to churn the vast Milk Ocean and extract the divine nectar of immortality, known as Amrita.',
          'They used the immense Mount Mandara as the churning rod and the great serpent Vasuki as the churning rope. However, as the churning commenced, the heavy mountain began sinking rapidly into the soft, muddy ocean floor of mud, threatening to halt the entire cosmic endeavor.',
          'In response, Lord Vishnu manifested as Kurma, a colossal tortoise. Diving deep to the seabed, he placed the massive Mount Mandara upon his back, providing a diamond-hard, stable foundation. With Kurma supporting the rod, the ocean was successfully churned, giving rise to numerous celestial treasures, Lakshmi Devi, and ultimately the Amrita.'
        ]
      },
      {
        pageNumber: 5,
        title: 'Varaha Avatar',
        subtitle: 'Incarnation III: The Colossal Sacred Boar',
        type: 'narrative',
        visualElement: { type: 'scene', details: 'Boar lifting the globe out of dark water' },
        content: [
          'The tyrannical demon Hiranyaksha, having received protective boons from the gods, grew extremely arrogant and attacked the devas. In his hatred, he seized Bhudevi—the personification of Mother Earth—and dragged her down into the toxic, bottomless depths of the primordial cosmic ocean.',
          'The earth lay submerged, helpless and suffocating in the dark waters. To rescue her and restore stability, Lord Vishnu manifested as Varaha, a giant wild boar possessing infinite strength. He dove deep into the primordial dark abyss.',
          'After a colossal combat that shook the fabric of the universe for a thousand years, Varaha slew the demon Hiranyaksha. He then tenderly balanced Bhudevi upon His prominent white tusks, lifting her back to her rightful cosmic orbit, making the lands stable once more for all living creatures.'
        ]
      },
      {
        pageNumber: 6,
        title: 'Narasimha Avatar',
        subtitle: 'Incarnation IV: The Divine Guardian of Prahlada',
        type: 'narrative',
        visualElement: { type: 'scene', details: 'Half-man half-lion bursting from a golden column' },
        content: [
          'The demon king Hiranyakashipu, angry over his brother\'s death, obtained a magical boon from Lord Brahma that made him virtually unkillable. The boon stated that he could not be killed by man or beast, indoors or outdoors, at day or at night, on the ground or in the sky, nor by any weapon of war.',
          'Safeguarded by this complex protection, he declared himself God and banned worship of Vishnu. However, his own child, Prahlada, remained a pure, unyielding disciple of Vishnu. Outraged, the king subjected Prahlada to horrific tortures, but the child survived each attempt through faith.',
          'Finally, challenging the boy, Hiranyakashipu pointed to a stone pillar and asked: "Is your Lord in this column?" Prahlada replied "He is everywhere." The king smashed the pillar, and from its heart emerged Narasimha—half-man, half-lion (neither man nor beast). At twilight (neither day nor night), on the threshold of the palace (neither inside nor outside), He placed the demon on His thighs (neither ground nor air) and tore him apart with His sharp claws (no artificial weapon), preserving His devotee.'
        ]
      },
      {
        pageNumber: 7,
        title: 'Vamana Avatar',
        subtitle: 'Incarnation V: The Three Giant Strides',
        type: 'narrative',
        visualElement: { type: 'scene', details: 'Dwarf Brahmin stepping with colossal leg' },
        content: [
          'King Bali, the pious grandson of Prahlada, became the sovereign ruler of the three worlds. Though noble, his immense power led to a swelling of pride, and the demigods were displaced from their celestial realms. Lord Vishnu appeared as Vamana, a highly modest, brilliant young dwarf Brahmin.',
          'Vamana approached King Bali during a grand sacrificial ritual and requested a seemingly minor gift: a stretch of land that he could cover in exactly three paces of his small feet. Despite warning from his guru, Sukracharya, Bali proudly granted the boon.',
          'Instantly, the dwarf Vamana began to expand into the colossal cosmic form known as Trivikrama. With his first giant stride, He covered the entire earth. With His second stride, He measured the heavens. Reaching the boundaries of cosmic space and leaving no room for a third step, Vamana turned to King Bali. Realizing the divine truth, Bali bowed and offered his own head for the third step. Vamana placed His foot on Bali, sending his soul to the netherworld of Patala, while initiating him into supreme liberation.'
        ]
      },
      {
        pageNumber: 8,
        title: 'Parashurama Avatar',
        subtitle: 'Incarnation VI: The Axe-Wielding Warrior Sage',
        type: 'narrative',
        visualElement: { type: 'scene', details: 'Sage holding battleaxe with radiating light' },
        content: [
          'By the Treta Yuga, the ruling Kshatriya warrior kings had abandoned their sacred duties, succumbing to greed, absolute corruption, and tyranny. They oppressed sages, plundered innocent citizens, and brought chaos to the earth. To address this social decay, Lord Vishnu was born as Rama, the son of Sage Jamadagni, carrying a grand battle-axe given by Lord Shiva.',
          'When the greedy King Kartavirya Arjuna looted the ashram of Jamadagni and stole their sacred wish-fulfilling cow, Kamadhenu, Parashurama tracked down the king and cut off his thousand arms, reclaiming the sacred cow.',
          'In retaliation, the king\'s sons killed the peaceful Jamadagni while Parashurama was away. Consumed by righteous, purifying anger, Parashurama swore to cleanse the world of tyrannical rulers. He swept across the globe twenty-one times, neutralizing corrupt military monarchs and restoring correct societal balance, reminding rulers that power must always serve spiritual duty.'
        ]
      },
      {
        pageNumber: 9,
        title: 'Lord Rama',
        subtitle: 'Incarnation VII: The Paragon of Righteousness',
        type: 'narrative',
        visualElement: { type: 'scene', details: 'Bow and arrow pointing to the sky' },
        content: [
          'Born as the eldest price of Ayodhya, Rama is the embodiment of "Maryada Purushottam"—the supreme, ideal human who lives in absolute compliance with ethical duty (Dharma). He represents the perfect son, the perfect husband, and the ultimate, compassionate king.',
          'To satisfy his father\'s promise, Rama cheerfully accepted a fourteen-year banishment into the perilous forests, accompanied by his devoted wife Sita and loyal brother Lakshmana. While living in the wilderness, the demon king Ravana, ruler of Lanka, abducted Sita.',
          'Rama formed an alliance with the Vanara army, including the ultimate devotee Hanuman. Building a rock bridge across the ocean to Lanka, He fought an legendary war and defeated Ravana. Upon returning home, His coronation as ruler initiated Ramrajya—an era of perfect justice, prosperity, and peace.'
        ]
      },
      {
        pageNumber: 10,
        title: 'Lord Krishna',
        subtitle: 'Incarnation VIII: The Playful Guide & Philosopher',
        type: 'narrative',
        visualElement: { type: 'scene', details: 'Flute resting on the Bhagavad Gita book' },
        content: [
          'Lord Krishna is the multi-dimensional avatar, representing playfulness, absolute political statesmanship, divine love, and transcendental philosophy. From His childhood in Vrindavan playing the alluring flute, to His central role in the epic Mahabharata, He captivated all hearts.',
          'When the rival cousins Pandavas and Kauravas faced each other in the massive war at Kurukshetra, Krishna declined to pick up weapons. Instead, He offered Himself as the charioteer and counselor to the hero Arjuna.',
          'Seeing his relatives on the opposing side, Arjuna was paralyzed by grief and moral doubt. In that pivotal moment, Krishna delivered the sublime teachings of the Bhagavad Gita. He revealed His cosmic form (Vishwaroopam) showing the entire universe within Himself. He explained the paths of Karma Yoga (selfless action), Jnana Yoga (wisdom), and Bhakti Yoga (uncompromising devotion), reminding humanity to act selflessly for truth.'
        ]
      },
      {
        pageNumber: 11,
        title: 'Lord Balarama & Lord Buddha',
        subtitle: 'Incarnation IX: Perspectives on Reform & Strength',
        type: 'philosophy',
        visualElement: { type: 'icon', iconName: 'Compass' },
        content: [
          'Depending on the specific Vedic region and traditions, the ninth incarnation is represented by either Balarama or Gautama Buddha, both expanding the horizons of global Dharma in unique ways.',
          'Lord Balarama, the elder sibling of Krishna, represents immense, pure spiritual strength and the agricultural essence of life, carrying a divine plough. He holds the universe together with quiet determination, acting as the bedrock of divine action and the protector of ecosystem balance.',
          'Siddhartha Gautama, the Buddha, represents deep inner silence, meditation, and total compassion. Seeing the suffering of the world and the decay of empty rituals, he renounced his kingdom to achieve ultimate Nirvana under the Bodhi tree. He revolutionized the concept of Dharma, teaching non-injury (Ahimsa), mindfulness, and the middle path to free all sentient beings from the suffering of desire.'
        ]
      },
      {
        pageNumber: 12,
        title: 'Kalki Avatar',
        subtitle: 'Incarnation X: The Ultimate Deliverer of the Golden Age',
        type: 'infographic',
        visualElement: { type: 'scene', details: 'White horse with a sword of fire' },
        content: [
          'In the grand cosmic timeline of Hindu theology, our present era is Kali Yuga—the age of heavy darkness, spiritual ignorance, and moral decline. It is prophesied that as this age nears its final centuries, human values will collapse, truth will vanish, and the world will fall into complete chaos.',
          'At this supreme turning point, Lord Vishnu will manifest His final avatar: Kalki. It is predicted He will be born in the village of Shambhala. He will appear riding a magnificent white horse named Devadatta, holding a blazing sword of pure spiritual flame.',
          'Kalki will destroy corrupt governance, extinguish the forces of dark ignorance, and purify the collective consciousness of humanity. After this absolute cleansing, Kalki will initiate the return of the Satya Yuga—the Golden Age of absolute truth, justice, and spiritual illumination—restarting the endless cosmic cycle.'
        ]
      }
    ]
  },
  {
    id: 'durga',
    name: 'Devi Durga',
    sanskritName: 'श्री दुर्गा',
    title: 'The Primordial Shakti',
    tagline: 'The supreme feminine cosmic force, protecting creation from existential threats',
    mantra: 'ॐ दुं दुर्गायै नमः',
    mantraTranslation: 'Om Dum Durgayai Namah - "Salutations to the protective, invincible Mother Durga"',
    residence: 'Manidvipa (The Island of Jewels) / Mount Kailash',
    mount: 'Dawan (The Sovereign Lion)',
    element: 'Tejas (Divine Fire) & Shakti',
    weapons: ['Trishul (Trident)', 'Sudarshana Chakra (Discus)', 'Bow & Arrow', 'Khadga (Sword)'],
    template: 'A',
    category: 'Adi Shakti',
    colorTheme: {
      primary: '#D4AF37',
      accent: '#dc2626', // Sacred Crimson
      bgGradient: 'from-[#2e0909] via-[#1a0505] to-[#0d0202]',
      cardBg: 'bg-[#291111]'
    },
    overview: 'Devi Durga is the protective Mother of the universe, combining the energies of all celestial beings to neutralize cosmic evil. She represents both tender maternal protection and the fierce, unyielding warrior spirit of Adi Parashakti.',
    pages: [
      {
        pageNumber: 1,
        title: 'Adi Parashakti',
        subtitle: 'The Supreme Feminine Cosmic Energy',
        type: 'cover',
        visualElement: { type: 'mandala', details: 'Shri Yantra' },
        content: [
          'Devi Durga is the active, dynamic energy of the universe, known as Adi Parashakti. Without her presence, consciousness remains static and unmanifest. She is the primordial source of creation, the force of sustenance, and the power of dissolution.',
          'She represents both the gentle mother who nurtures and the fierce, invincible warrior who protects. Her name "Durga" literally translates to "the fortress" or "she who is difficult to conquer," shielding her devotees from all external and internal tribulations.',
          'She resides in the transcendental, sovereign realm of Manidvipa (the Island of Jewels) while also dwelling on Mount Kailash alongside Lord Shiva. Every movement in the universe—from the spin of an electron to the birth of a galaxy—is an expression of her dynamic Shakti.'
        ]
      },
      {
        pageNumber: 2,
        title: 'Origin & Mahishasura Mardini',
        subtitle: 'The Convergence of Celestial Luminescence',
        type: 'philosophy',
        visualElement: { type: 'scene', details: 'Goddess emerging from overlapping flames of the gods' },
        content: [
          'The shape-shifting buffalo demon Mahishasura, through severe penance, received a boon from Lord Brahma that no man, god, or beast could defeat him. Armed with this arrogance, his demonic armies conquered the skies, leaving the Devas dispossessed and weeping.',
          'Unable to defeat him, the gods gathered. In anger and focus, a blinding stream of pure light energy (Tejas) burst forth from the mouths of Brahma, Vishnu, and Shiva, merging into a brilliant, incandescent cloud of fire. Out of this majestic furnace of light emerged the spectacular goddess Durga.',
          'Each god gifted her their ultimate weapon: Shiva gave His trident, Vishnu His discus, Indra his thunderbolt, and Himavan a fierce lion to ride. Sridevi marched on Lanka; in a cosmic struggle that shook the oceans and split the mountains, she engaged Mahishasura. She pinned him down and pierced him with her trident, earning the immortal title Mahishasura Mardini (Slayer of the Buffalo Demon).'
        ]
      },
      {
        pageNumber: 3,
        title: 'Form I: Shailaputri',
        subtitle: 'The Daughter of the Sacred Mountain',
        type: 'manifestation',
        visualElement: { type: 'icon', iconName: 'Mountain' },
        content: [
          'The first of the Navadurga forms worshipped during the auspicious Navaratri festival is Devi Shailaputri. After her self-immolation as Sati in her previous birth, she reincarnated as the daughter of Himavan, the lord of the Himalayas.',
          'Her name "Shailaputri" literally translates to "Daughter of the Mountains." She represents the earth element and is the foundational root chakra (Muladhara) of spiritual practice, anchoring the seeker\'s awareness.',
          'She is depicted riding a majestic white bull (Nandi), holding a trident (Trishul) in her right hand and a holy lotus flower in her left. She symbolizes absolute stability, willpower, and the unshakeable determination required to scale the heights of self-realization.'
        ]
      },
      {
        pageNumber: 4,
        title: 'Form II: Brahmacharini',
        subtitle: 'The Ascetic Seeker of Ultimate Truth',
        type: 'manifestation',
        visualElement: { type: 'icon', iconName: 'Bookmark' },
        content: [
          'The second form is Devi Brahmacharini, the embodiment of austere spiritual discipline, celibacy, and penance. Her name signifies one who practices devout spiritual exploration (Brahma-charini).',
          'She is depicted walking barefoot, clad in pristine white robes. In her right hand, she holds a sacred rosary (Akshamala) to count mantras, and in her left hand, she holds a simple wooden water pot (Kamandalu), representing a life of minimalism and focus.',
          'She undertook intense penance for thousands of years to attain Lord Shiva as her consort, ignoring severe heat, cold, and storms. Out of this penance, she acquired infinite knowledge, peace, and grace. She blesses devotees with unshakeable patience, fortitude, and focus.'
        ]
      },
      {
        pageNumber: 5,
        title: 'Form III: Chandraghanta',
        subtitle: 'The Moon-Belled Protector of Peace',
        type: 'manifestation',
        visualElement: { type: 'icon', iconName: 'Bell' },
        content: [
          'The third form is Devi Chandraghanta, representing courage and acoustic purification. Upon marrying Lord Shiva, she began wearing a golden half-moon shaped like a bell (Ghanta) on her forehead, hence her name.',
          'She is depicted with ten arms holding numerous weapons, representing her readiness to fight evil, while her posture remains calm, peaceful, and majestic. She rides a powerful tiger or lion, ready for instant battle response.',
          'The terrifying sound of her golden bell strikes terror into demons and evil negative spirits, while instantly calming and healing the nervous systems of her devotees. She represents the balance between fierce combat capability and ultimate, gentle inner peace.'
        ]
      },
      {
        pageNumber: 6,
        title: 'Form IV: Kushmanda',
        subtitle: 'The Creative Spark of the Cosmic Egg',
        type: 'manifestation',
        visualElement: { type: 'icon', iconName: 'Globe' },
        content: [
          'The fourth form is Devi Kushmanda, the divine architect whose smile created the universe. Her name is derived from "Ku" (little), "Ushma" (warmth/energy), and "Anda" (cosmic egg).',
          'At the beginning of time, the universe was a dark, cold, empty void of complete non-existence. Kushmanda smiled, and her subtle, radiant smile emitted a cosmic spark that ignited light, time, heat, and life, expanding into the majestic cosmic egg.',
          'She is depicted with eight arms, holding sacred items, and riding a powerful lion. She resides in the center of the solar system, regulating its intense heat and providing life-giving light and life-force energy to all planets and stars, symbolizing creative radiance.'
        ]
      },
      {
        pageNumber: 7,
        title: 'Form V: Skandamata',
        subtitle: 'The Loving Mother of the War Lord',
        type: 'manifestation',
        visualElement: { type: 'icon', iconName: 'Heart' },
        content: [
          'The fifth form of the goddess is Devi Skandamata, which means the "Mother of Skanda." Skanda (also known as Kartikeya) is the divine six-headed war general who led the celestial armies to victory against the demon Tarakasura.',
          'She is depicted seated on a lion, holding her young infant son Skanda in her lap. She has four arms; two of her hands hold beautiful lotuses, while her remaining hand is held in the mudra of bestowing boons and safety.',
          'Skandamata represents the supreme maternal instinct of protection and the source of ultimate, nurturing wisdom. Worshipping her blesses the devotee with child-like purity of heart, absolute mental peace, and the protective shielding of divine motherly love.'
        ]
      },
      {
        pageNumber: 8,
        title: 'Form VI: Katyayani',
        subtitle: 'The Fierce Daughter of the Forest Sage',
        type: 'manifestation',
        visualElement: { type: 'icon', iconName: 'Shield' },
        content: [
          'The sixth form is Devi Katyayani, born out of the righteous anger of the cosmos. The great Sage Katyayana performed intense penance, wishing for the supreme goddess to be born as his daughter to help neutralize demon oppression.',
          'Fulfilling his wish, she was born as Katyayani. She is the ultimate warrior form, radiating the brilliance of a thousand suns, carrying a shining golden sword and shield, riding a majestic lion.',
          'She was the key warrior goddess who marched on the demonic stronghold, her hair flowing like wild fire. She represents fierce, active righteousness, helping her devotees smash external obstacles, negative habits, and toxic relationships.'
        ]
      },
      {
        pageNumber: 9,
        title: 'Form VII: Kalaratri',
        subtitle: 'The Night of Destruction & Dark Ignorance',
        type: 'manifestation',
        visualElement: { type: 'icon', iconName: 'Flame' },
        content: [
          'The seventh form is Devi Kalaratri, the most terrifying and raw manifestation of Shakti. Her name means "The Black Night of Time" or "Destruction of Death." She is dark as the dark night void, with fierce red eyes, three glowing eyes, and disheveled hair.',
          'She rides a simple donkey, carrying a sharp iron meat cleaver and a spiked club. While her appearance is terrifying to evil and forces of malice, she is extremely warm and protective to her true devotees, which is why she is also called "Shubhankari" (the bringer of auspiciousness).',
          'Kalaratri represents the absolute collapse of individual ego and the destruction of dark ignorance. She shows that death and darkness are simply transitions to light, and she assists seekers in cutting through fear, illusions, and mental blockages.'
        ]
      },
      {
        pageNumber: 10,
        title: 'Form VIII: Mahagauri',
        subtitle: 'The Radiant Mother of Serenity & Purification',
        type: 'manifestation',
        visualElement: { type: 'icon', iconName: 'Sun' },
        content: [
          'The eighth form is Devi Mahagauri, the epitome of beauty, purity, and ultimate grace. After her intense, thousands-of-years-long penance in the forest, her body was completely covered in dark dust, forest leaves, and wild mud.',
          'To purify her, Lord Shiva bathed her in the sacred, sparkling waters of the river Ganga. Instantly, her skin radiated with a blinding, pristine white brilliance, matching the snow-capped mountain peaks, earning her the name Mahagauri.',
          'She is depicted clad in beautiful white garments, riding a calm bull, holding a tiny damaru-drum and trident. She represents absolute calm, deep purification, the washing away of accumulated karmas, and the restoration of innocent joy.'
        ]
      },
      {
        pageNumber: 11,
        title: 'Form IX: Siddhidhatri',
        subtitle: 'The Ultimate Giver of Perfection & Liberation',
        type: 'infographic',
        visualElement: { type: 'icon', iconName: 'Sparkles' },
        content: [
          'The ninth and final Navadurga form is Devi Siddhidhatri, whose name translates to "The Giver of Mystic Powers" or "Siddhis." She is the ultimate source of spiritual perfection and ultimate liberation (Moksha).',
          'She is depicted seated on a blooming pink lotus, carrying a discussions, conch, mace, and lotus. In the Shiva Purana, Lord Shiva himself worshipped Siddhidhatri to attain the eight prime siddhis, after which she merged with his left side, forming the magnificent Ardhanarishvara.',
          'She is the ultimate goal of the yogic path, transforming discipline into realization. She teaches that the ultimate power is not control over others, but complete self-mastery, guiding the seeker out of the illusion of the material world into permanent unity with the absolute.'
        ]
      }
    ]
  },
  {
    id: 'shiva',
    name: 'Lord Shiva',
    sanskritName: 'श्री शिव',
    title: 'The Destroyer & Transformer',
    tagline: 'The timeless void, master of yogis, and ultimate transformer of existence',
    mantra: 'ॐ नमः शिवाय',
    mantraTranslation: 'Om Namah Shivaya - "Salutations to the auspicious, silent, supreme Lord of the universe"',
    residence: 'Mount Kailash / Cremation Lands (Smashana)',
    mount: 'Nandi (The Sacred Bull)',
    element: 'Vayu (Wind) & Tamas (Dissolution)',
    weapons: ['Trishul (Trident)', 'Pinaka Bow', 'Parashu (Axe)'],
    template: 'B',
    category: 'Trideva',
    colorTheme: {
      primary: '#D4AF37',
      accent: '#06b6d4', // Icy Turquoise
      bgGradient: 'from-[#061517] via-[#020b0c] to-[#010405]',
      cardBg: 'bg-[#0f1f21]'
    },
    overview: 'Lord Shiva is the ultimate transformer, ascetic yogi, and destroyer of illusion within the Trimurti. He is pure, silent consciousness from which everything emerges and into which all of existence eventually dissolves.',
    pages: [
      {
        pageNumber: 1,
        title: 'Shiva Mahadeva',
        subtitle: 'The Lord of Mount Kailash',
        type: 'cover',
        visualElement: { type: 'mandala', details: 'Trishula & Crescent Moon' },
        content: [
          'Lord Shiva, also known as Mahadeva (The Great God), is the ultimate destroyer and transformer within the Trinity. He represents the silent vacuum from which existence is born and back into which it must inevitably merge.',
          'While other gods reside in magnificent gilded palaces of celestial gold, Shiva chooses a life of absolute simplicity, roaming the snow-capped, wind-swept heights of Mount Kailash or meditating in cremation grounds (Smashana). Clad in animal hides, His skin smeared with sacred ash (Vibhuti), He embodies absolute renunciation.',
          'He has a blue neck (Neelakantha) from drinking the terrible water cosmic poison Halahala to protect creation. Around His neck is coiled the cobra Vasuki, and His matted locks hold the crescent moon and the wild torrent of the sacred River Ganga, balancing raw cosmic power with absolute tenderness.'
        ]
      },
      {
        pageNumber: 2,
        title: 'Core Philosophy & Stillness',
        subtitle: 'The Unmanifest Brahman & Ascetic Yoga',
        type: 'philosophy',
        visualElement: { type: 'icon', iconName: 'Sunset' },
        content: [
          'In Hindu metaphysics, Shiva represents the unmanifest, infinite field of pure intelligence. While Vishnu is the thread of active preservation, Shiva is the deep, dark, peaceful sleep that precedes and succeeds all creation. He is the first Yogi—Adiyogi—the source of yoga and absolute dhyana (meditation).',
          'Smearing ash on His body represents the transient nature of physical matter; everything material will eventually turn to dust, leaving only the immortal, clean soul.',
          'His third eye, positioned on His forehead, remains closed during normal cosmic cycles. When opened, it unleashes the blinding fire of absolute intuition, vaporizing illusions, ego, and base desires. Shiva teaches humanity that true freedom lies not in accumulating external empires, but in reclaiming the infinite empire of inner silence.'
        ]
      },
      {
        pageNumber: 3,
        title: 'Key Manifestations',
        subtitle: 'Nataraja\'s Tandava & Ardhanarishvara Balance',
        type: 'manifestation',
        visualElement: { type: 'scene', details: 'Dancer within a ring of flames' },
        content: [
          'Shiva manifests in diverse, contrasting forms that capture the complexity of existence. The most visual of these is Lord Nataraja—the Lord of the Cosmic Dance. Within a circular halo of wild flames, He dances the Tandava, stepping on the dwarf Apasmara (representing dark ignorance) to keep cosmic rhythms alive.',
          'In another profound form, He manifested as Lord Ardhanarishvara—the half-man, half-woman depiction. In this form, His left side is completely merged with His consort Sridevi Parvati.',
          'This visualizes that the ultimate reality is non-dual; it is a perfect, indistinguishable synthesis of masculine energy (Purusha - consciousness) and feminine energy (Prakriti - creative nature/matter). One cannot exist or act without the other, establishing absolute spiritual equality and cosmic union.'
        ]
      },
      {
        pageNumber: 4,
        title: 'Sacred Geographies',
        subtitle: 'The 12 Jyotirlingas of Eternal Light',
        type: 'infographic',
        visualElement: { type: 'icon', iconName: 'MapPin' },
        content: [
          'Across the ancient landscape of Bharat (India), Shiva is represented through the self-manifested pillars of divine cosmic energy known as the Jyotirlingas (lingas of radiant light). Legend states that Shiva manifested as an infinite, blazing pillar of light to settle a dispute between Brahma and Vishnu about supremacy.',
          'Recognizing that the light had no beginning or end, they bowed to Shiva\'s infinity. Twelve of these spots became highly sacred portals where His presence remains potent.',
          'These sites span the entire subcontinent: Somnath in the west, Kedarnath in the snowy north, Rameshwaram in the deep south, and Kashi Vishwanath in the east. They form a geographic network linking mountains, coastlines, and river valleys, establishing a map of cosmic consciousness across physical geography, guiding pilgrims for thousands of years.'
        ]
      }
    ]
  },
  {
    id: 'indra',
    name: 'Lord Indra',
    sanskritName: 'श्री इन्द्र',
    title: 'The King of Heaven',
    tagline: 'Vedic Lord of thunder, lightning, and ruler of the celestial assembly of Svarga',
    mantra: 'ॐ इन्द्राय नमः',
    mantraTranslation: 'Om Indraya Namah - "Salutations to the sovereign ruler, Lord Indra"',
    residence: 'Amaravati, Svarga Loka',
    mount: 'Airavata (The Majestic White Elephant)',
    element: 'Vidyut (Lightning) & Antariksha (Atmosphere)',
    weapons: ['Vajra (The Celestial Thunderbolt)', 'Indra-Jaal (Net of Illusions)', 'Hook'],
    template: 'C',
    category: 'Vedic Pantheons',
    colorTheme: {
      primary: '#D4AF37',
      accent: '#f59e0b', // Solar Amber
      bgGradient: 'from-[#20160a] via-[#120c04] to-[#080501]',
      cardBg: 'bg-[#22170d]'
    },
    overview: 'In early Vedic literature, Lord Indra is the supreme, lightning-wielding hero and king of the Devas. He battles dark demons of drought, secures life-giving waters, and represents active willpower and sensory command.',
    pages: [
      {
        pageNumber: 1,
        title: 'Lord Indra',
        subtitle: 'Sovereign of Svarga & Storms',
        type: 'cover',
        visualElement: { type: 'mandala', details: 'Thunderbolt (Vajra) pattern' },
        content: [
          'Lord Indra is the supreme ruler of the celestial assembly (Devas) and the master of "Svarga Loka"—the heavenly paradise. In early Hindu tradition, He is the absolute god of the atmosphere, lightning, rainstorms, and fertility of the soil.',
          'Residing in his magnificent capital city Amaravati, He sits upon the golden throne of Svarga. He is the majestic champion who marshals the cosmic forces of light against darkness, maintaining world stability, and protecting human and saintly assemblies.',
          'His partner is Sridevi Shachi (also known as Indrani), representing royal power, beauty, and virtue. As the divine sovereign, He is depicted with a golden crown, multi-armed, radiating solar energy, and ready to respond to any cosmic attack on the celestial orders.'
        ]
      },
      {
        pageNumber: 2,
        title: 'Rigvedic Dominance',
        subtitle: 'The Supreme Hero of the Ancient Hymns',
        type: 'philosophy',
        visualElement: { type: 'icon', iconName: 'BookOpen' },
        content: [
          'In the ancient archives of Hindu scriptures—the Rigveda Samhita—Lord Indra occupies the ultimate, unrivaled position. Out of the ten books of the Rigveda, over 250 hymns are dedicated solely to His praise—making Him the most sung deity in early Vedic literature.',
          'He is described as the epic champion of absolute strength, courage, and vitality. He is the main consumer of the sacred "Soma" juice—the divine extract that fuels His celestial energy, expands His consciousness, and gives Him the power to perform cosmic feats.',
          'In these hymns, Indra is styled as the protector of herds, the breaker of mountain fortresses, and the ultimate ally of the ancient rishis and human leaders, modeling active courage, struggle, and sovereign responsibility.'
        ]
      },
      {
        pageNumber: 3,
        title: 'Divine Armaments & Steed',
        subtitle: 'The White Storm Elephant & The Vajra',
        type: 'manifestation',
        visualElement: { type: 'scene', details: 'Colossal elephant stepping on storm clouds' },
        content: [
          'Indra\'s royal sovereign status is matched by spectacular celestial assets. His primary weapon is the "Vajra"—the divine thunderbolt, crafted from the diamond-like bones of the self-sacrificing Sage Dadhichi. It is the ultimate weapon of light, representing focused, indestructible truth piercing through dark confusion.',
          'In battle, He rides "Airavata"—a magnificent, multi-tusked white elephant which emerged during the churning of the Ocean of Milk. Airavata is not a simple terrestrial beast, but a colossal celestial vehicle representing rolling storm clouds.',
          'With his massive trunk, Airavata acts as a water pump, drawing water from the subterranean waters (Patala) and discharging it into the skies for Indra to scatter as rain. Indra also wields the "Indra-Jaal" (The Net of Indra)—a massive web of infinite nodes, with each node reflecting all other nodes, predicting modern complex holographic reality.'
        ]
      },
      {
        pageNumber: 4,
        title: 'The Great Battle of Vritra',
        subtitle: 'Slaying the Stagnant Dragon of Drought',
        type: 'narrative',
        visualElement: { type: 'scene', details: 'Warrior striking a giant serpent curled around a mountain' },
        content: [
          'Indra\'s most famous cosmic exploit is His epic duel with "Vritra"—the colossal dragon of drought, stagnation, and darkness. Vritra, a demon born to block cosmic flow, swallowed the seven celestial rivers of the earth and coiled his massive body around the mountains, hoarding all the world\'s fresh water.',
          'The earth withered, forests died, and all living things gasped for water. To save creation, Indra took a deep potion of Soma, mounted Airavata, and flew into the black storm clouds to challenge Vritra.',
          'Armed with His blazing Vajra, Indra engaged the giant serpent, dodging its toxic venom and massive coils. In a world-shaking strike, Indra split the dragon\'s head with His thunderbolt. The colossal body fell, the mountains cracked, and the blocked waters burst forth in giant torrents, flowing down to nourish the parched soils and returning life and light to earth.'
        ]
      },
      {
        pageNumber: 5,
        title: 'Psychological Symbolism',
        subtitle: 'Mind, Senses, and the Battle of Ignorance',
        type: 'philosophy',
        visualElement: { type: 'icon', iconName: 'Activity' },
        content: [
          'In the mystical Upanishadic interpretation of Vedic rituals, Indra is not a literal historical king, but a profound symbol of the human mind and willpower. The name "Indra" is derived from the word "Indriyu" (the physical and mental senses).',
          'Thus, Indra represents the sovereign Mind which must control and discipline the volatile senses (Indriyas) to steer the human chariot towards enlightenment.',
          'His prime adversary, Vritra (derived from the root "vri" meaning to cover/cloud), represents spiritual inertia, fear, self-doubt, and greed that clog our internal channels. Slaying Vritra with the diamond weapon of Vajra (representing sharp, focused discrimination and spiritual intellect) symbolizes overcoming ego and internal blocks to release the waters of pure, radiant self-awareness.'
        ]
      }
    ]
  },
  {
    id: 'agni',
    name: 'Lord Agni',
    sanskritName: 'श्री अग्नि',
    title: 'The Sacred Messenger',
    tagline: 'Vedic Lord of fire, the divine conduit between humanity and the celestial realms',
    mantra: 'ॐ अग्नये नमः',
    mantraTranslation: 'Om Agnaye Namah - "Salutations to Agni, the pristine, purifying divine fire"',
    residence: 'Yajna Shala (Sacrificial Altar) / Swarga',
    mount: 'Mesha (The Ram)',
    element: 'Agni (Fire) & Transformation',
    weapons: ['Spear', 'Axe', 'Flame'],
    template: 'Vedic-Elemental',
    category: 'Vedic Elements',
    colorTheme: {
      primary: '#D4AF37',
      accent: '#ea580c', // Fire Orange
      bgGradient: 'from-[#2a0e05] via-[#170501] to-[#0a0200]',
      cardBg: 'bg-[#29130d]'
    },
    overview: 'Lord Agni is the sacred fire, the second most prominent deity of the Vedas. He serves as the divine messenger, carrying human prayers and offerings directly to the gods, symbolizing transformation, purification, and warmth.',
    pages: [
      {
        pageNumber: 1,
        title: 'The Celestial Conduit',
        subtitle: 'The Fire of Homa & Messenger of Gods',
        type: 'cover',
        visualElement: { type: 'mandala', details: 'Yajna Kunda with flame' },
        content: [
          'Lord Agni is the personification of fire, holding an absolutely key role in the entire Vedic tradition. He is the "Mouthpiece of the Gods." In ancient Yajna rituals, when sacred wood, ghee (clarified butter), and grains are offered into the consecrated fire, Agni consumes them.',
          'He purifies these offerings, converting them into spiritual light, and delivers them directly to the other celestial gods. Thus, no Vedic ritual has any efficacy without the active presence of Agni.',
          'He is depicted with two heads, representing His dual nature of warmth and destruction; three legs, representing the three worlds (earth, atmosphere, and heaven); and seven tongues, which lick the liquid gold offerings, riding a strong, protective ram.'
        ]
      },
      {
        pageNumber: 2,
        title: 'Sacred Light & Cleansing',
        subtitle: 'The Pure Witness of Sacred Oaths',
        type: 'philosophy',
        visualElement: { type: 'icon', iconName: 'Compass' },
        content: [
          'Agni is the element of absolute, compromise-free purity. Unlike earth or water, which can be polluted, fire remains forever pure, instantly consuming and purifying everything it touches. He is the "Pratyaksha Devata"—the directly visible physical divine presence.',
          'Therefore, Agni serves as the ultimate, sacred witness to all human pacts, treaties, and spiritual oaths. For instance, in traditional Hindu marriages, the bride and groom take their seven vows walking around the sacred Agni (Saptapadi).',
          'He resides in every home as the hearth, in forests as the raw warmth, and in the sun as cosmic light, keeping the planet cozy, sustaining vegetation through photosynthesis, and representing the warmth of loving hearts.'
        ]
      },
      {
        pageNumber: 3,
        title: 'Jataragni & Vaishvanara',
        subtitle: 'The Internal Digestive Flame of Life',
        type: 'infographic',
        visualElement: { type: 'icon', iconName: 'Activity' },
        content: [
          'In Vedic physiology and medicine (Ayurveda), Agni operates inside our bodies as "Jataragni"—the biological digestive fire located in the stomach. Jataragni is the force that digests food, separates nutrients, and fuels our muscles, brain, and nervous systems.',
          'If this internal flame is weak, toxins accumulate and sickness occurs. In supreme terms, He is "Vaishvanara"—the grand, universal energy of metabolisms.',
          'In the Bhagavad Gita, Krishna states: "I become the fire of digestion (Vaishvanara) in the bodies of all living creatures." Thus, our physical digestion is a sacred fire ritual, linking our survival with the grand cosmos.'
        ]
      }
    ]
  },
  {
    id: 'vayu',
    name: 'Lord Vayu',
    sanskritName: 'श्री वायु',
    title: 'The Cosmic Breath',
    tagline: 'Vedic Lord of wind, bearer of fragrances, and master of the vital prana-energy',
    mantra: 'ॐ वायवे नमः',
    mantraTranslation: 'Om Vayave Namah - "Salutations to Vayu, the dynamic, life-sustaining wind"',
    residence: 'Vayu Loka / Sky',
    mount: 'Mriga (The Swift Black Gazelle)',
    element: 'Vayu (Air) & Kinetic Force',
    weapons: ['Ankusha (Goad)', 'Sovereign Flag'],
    template: 'Vedic-Elemental',
    category: 'Vedic Elements',
    colorTheme: {
      primary: '#D4AF37',
      accent: '#10b981', // Emerald Green
      bgGradient: 'from-[#051e17] via-[#020e0a] to-[#010403]',
      cardBg: 'bg-[#0f241d]'
    },
    overview: 'Lord Vayu is the wind, the kinetic force that drives all atmospheric cycles. He represents the vital life force—Prana—that sustains our physical bodies, representing absolute movement and power.',
    pages: [
      {
        pageNumber: 1,
        title: 'The Infinite Breath',
        subtitle: 'Lord of the Winds & Atmospheric Power',
        type: 'cover',
        visualElement: { type: 'mandala', details: 'Stylized swirling wind currents' },
        content: [
          'Lord Vayu is the great god of air, representing motion, sound transmission, and live energy. He is invisible, yet His touch is felt and His immense power is seen when He whips up storm winds and moves colossal rainclouds across oceans.',
          'In the Vedas, He is hailed as the bearer of sweet fragrances (Gandhavaha). He is characterized by incredible, unmatched swiftness and vitality.',
          'He is depicted with four arms, holding a flagpole representing the direction of wind, a goad, and riding a swift, elegant black gazelle. He holds the entire chemical composition of earth\'s atmosphere together, enabling life to hear, breathe, and flourish.'
        ]
      },
      {
        pageNumber: 2,
        title: 'Sovereign Kinetic Force',
        subtitle: 'The Illustrious Father of Hanuman & Bhima',
        type: 'narrative',
        visualElement: { type: 'icon', iconName: 'Compass' },
        content: [
          'In epic Hindu history, Vayu transmits His incredible physical and moral strength directly into heroic lineages, fathering two of the most popular, powerful warriors in history: Hanuman in the Ramayana and Bhima in the Mahabharata.',
          'Hanuman, born of Vayu\'s essence, possessed the ability to fly at speed, modify His physical size, and jump across vast seas, carrying entire mountains of herbs to rescue Rama\'s warrior Lakshmana.',
          'Bhima, also born of Vayu\'s wind-power, had the strength of ten thousand elephants, shattering military arrays with His colossal mace. Both heroes represent Vayu\'s hallmark: untamed kinetic energy balanced by total dedication to Dharma.'
        ]
      },
      {
        pageNumber: 3,
        title: 'Prana and Spiritual Ascension',
        subtitle: 'The Vital Breath Governing the Senses',
        type: 'philosophy',
        visualElement: { type: 'icon', iconName: 'Activity' },
        content: [
          'In advanced Yogic science, Vayu operates as "Prana"—the vital life breath that links the mind, body, and consciousness. Prana is divided into five internal winds (Prana, Apana, Samana, Vyana, and Udana) which manage our respiration, circulation, digestion, and speech.',
          'By practicing pranayama (breath-control), yogis slow down these air currents, which can instantly soothe and stabilize the mind.',
          'When the vital Vayu is stabilized, it rises up the central energetic channel—the Sushumna Nadi—releasing the latent spiritual energy of Kundalini and dissolving the illusion of separation. Vayu is thus the very master key of breath that unlocks permanent spiritual liberation.'
        ]
      }
    ]
  }
];
