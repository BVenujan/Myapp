/**
 * Localization System
 * Manages translations for Tamil, Sinhala, and English
 */

class Localization {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = {};
        this.languages = ['en', 'ta', 'si'];
        this.languageNames = {
            'en': 'English',
            'ta': 'தமிழ்',
            'si': 'සිංහල'
        };
    }

    async init() {
        // Load all translation files
        for (const lang of this.languages) {
            await this.loadLanguage(lang);
        }
        
        // Load saved language preference
        const saved = localStorage.getItem('lankaLanguage');
        if (saved && this.languages.includes(saved)) {
            this.currentLanguage = saved;
        }
    }

    async loadLanguage(lang) {
        // Inline translations to avoid external file dependency
        const translations = {
            'en': this.getEnglishTranslations(),
            'ta': this.getTamilTranslations(),
            'si': this.getSinhalaTranslations()
        };
        this.translations[lang] = translations[lang];
    }

    getEnglishTranslations() {
        return {
            // Main Menu
            'menu.title': 'LANKA CITY',
            'menu.subtitle': 'Shadows of the Island',
            'menu.newGame': 'New Game',
            'menu.continueGame': 'Continue Game',
            'menu.settings': 'Settings',
            'menu.credits': 'Credits',
            'menu.exit': 'Exit',
            
            // Language Selection
            'lang.select': 'Select Language',
            'lang.english': 'English',
            'lang.tamil': 'தமிழ்',
            'lang.sinhala': 'සිංහල',
            
            // Game UI
            'ui.health': 'Health',
            'ui.money': 'Money',
            'ui.mission': 'Mission',
            'ui.wantedLevel': 'Wanted Level',
            'ui.objectives': 'Objectives',
            'ui.pause': 'PAUSED',
            'ui.resume': 'Resume',
            'ui.map': 'Map',
            'ui.missionList': 'Missions',
            'ui.inventory': 'Inventory',
            'ui.settings': 'Settings',
            
            // Missions
            'mission.homeAgain': 'Home Again',
            'mission.homeAgainDesc': 'Return home and meet your old friend',
            'mission.lostParcel': 'The Lost Parcel',
            'mission.lostParcelDesc': 'Deliver the parcel before time runs out',
            'mission.midnightExpress': 'Midnight Express',
            'mission.midnightExpressDesc': 'Drive through the city at night avoiding obstacles',
            'mission.harbourSecret': 'The Harbour Secret',
            'mission.harbourSecretDesc': 'Investigate suspicious activities at the harbour',
            'mission.rainyEscape': 'Rainy Night Escape',
            'mission.rainyEscapeDesc': 'Escape from enemies during a thunderstorm',
            'mission.hillCountry': 'Hill Country Run',
            'mission.hillCountryDesc': 'Drive through winding mountain roads',
            'mission.finalDeal': 'The Final Deal',
            'mission.finalDealDesc': 'Uncover the conspiracy and make your final choice',
            
            // Status Messages
            'status.missionStarted': 'Mission Started',
            'status.missionComplete': 'Mission Complete',
            'status.missionFailed': 'Mission Failed',
            'status.vehicleEntered': 'Vehicle Entered',
            'status.vehicleExited': 'Vehicle Exited',
            'status.healthRestored': 'Health Restored',
            'status.moneyAdded': 'Money Added',
            'status.wantedLevelReduced': 'Wanted Level Reduced',
            
            // Controls
            'control.moveForward': 'Move Forward',
            'control.moveBackward': 'Move Backward',
            'control.moveLeft': 'Move Left',
            'control.moveRight': 'Move Right',
            'control.sprint': 'Sprint',
            'control.jump': 'Jump',
            'control.enterVehicle': 'Enter/Exit Vehicle',
            'control.interact': 'Interact',
            'control.openMap': 'Open Map',
            'control.missionList': 'Mission List',
            'control.cheatConsole': 'Cheat Console',
            'control.pause': 'Pause',
            'control.camera': 'Control Camera',
            
            // Locations
            'loc.nuwara': 'Nuwara City',
            'loc.goldenBeach': 'Golden Beach',
            'loc.hillCrown': 'Hill Crown',
            'loc.lotusVillage': 'Lotus Village',
            'loc.royalFort': 'Royal Fort District',
            'loc.greenValley': 'Green Valley',
            'loc.metroJunction': 'Metro Junction',
            'loc.southernHwy': 'Southern Highway',
            'loc.airport': 'Airport District',
            'loc.harbourTown': 'Harbour Town',
            
            // Vehicles
            'vehicle.sedan': 'Sedan',
            'vehicle.suv': 'SUV',
            'vehicle.sports': 'Sports Car',
            'vehicle.motorcycle': 'Motorcycle',
            'vehicle.tuk': 'Tuk-Tuk',
            'vehicle.bus': 'Bus',
            'vehicle.truck': 'Truck',
            'vehicle.van': 'Van',
            'vehicle.boat': 'Fishing Boat',
            
            // Shops & Services
            'shop.clothing': 'Clothing Store',
            'shop.garage': 'Garage',
            'shop.food': 'Food Stand',
            'shop.hospital': 'Hospital',
            'shop.police': 'Police Station',
            
            // Cheats
            'cheat.title': 'Cheat Codes',
            'cheat.health': 'LANKAHEALTH - Restore Health',
            'cheat.money': 'ISLANDCASH - Add Money',
            'cheat.vehicle': 'TUKTUKNOW - Spawn Tuk-Tuk',
            'cheat.weather': 'CLEANSKY - Clear Weather',
            'cheat.night': 'MOONLIGHT - Night Time',
            'cheat.day': 'DAYBREAK - Day Time',
            'cheat.speed': 'QUICKFEET - Faster Running',
            'cheat.jump': 'SUPERHOP - Super Jump',
            'cheat.repair': 'FIXMYRIDE - Repair Vehicle',
            'cheat.police': 'CALMDOWN - Reduce Wanted Level',
            'cheat.activated': 'Cheat activated!',
            'cheat.invalid': 'Invalid cheat code',
        };
    }

    getTamilTranslations() {
        return {
            'menu.title': 'இலங்கை நகரம்',
            'menu.subtitle': 'தீவின் நிழல்',
            'menu.newGame': 'புதிய விளையாட்டு',
            'menu.continueGame': 'விளையாட்டை தொடரவும்',
            'menu.settings': 'அமைப்புகள்',
            'menu.credits': 'முடிவு பதிப்புகள்',
            'menu.exit': 'வெளியேறு',
            
            'lang.select': 'மொழி தேர்வு',
            'lang.english': 'English',
            'lang.tamil': 'தமிழ்',
            'lang.sinhala': 'සිංහල',
            
            'ui.health': 'ஆரோக்கியம்',
            'ui.money': 'பணம்',
            'ui.mission': 'பணி',
            'ui.wantedLevel': 'விரும்பப்பட்ட மட்டம்',
            'ui.objectives': 'இலக்குகள்',
            'ui.pause': 'இடைநிறுத்தம்',
            'ui.resume': 'தொடரவும்',
            
            'mission.homeAgain': 'வீட்டிற்கு திரும்புதல்',
            'mission.homeAgainDesc': 'வீட்டிற்குத் திரும்பி உங்கள் பழைய நண்பனைச் சந்திக்கவும்',
            
            'status.missionStarted': 'பணி தொடங்கியது',
            'status.missionComplete': 'பணி முடிந்தது',
            'status.missionFailed': 'பணி தோல்வி',
            'status.healthRestored': 'ஆரோக்கியம் மீட்டெடுக்கப்பட்டது',
            'status.moneyAdded': 'பணம் சேர்க்கப்பட்டது',
            
            'cheat.activated': 'விசை செயல்படுத்தப்பட்டது!',
            'cheat.invalid': 'செல்லுபடியாகாத விசை',
        };
    }

    getSinhalaTranslations() {
        return {
            'menu.title': 'ලංකා නගරය',
            'menu.subtitle': 'දූපතේ සෙවනැලි',
            'menu.newGame': 'නව ගේම',
            'menu.continueGame': 'ගේම ඉදිරියට දිගටු කරන්න',
            'menu.settings': 'සැකසුම්',
            'menu.credits': 'ගිණුම්',
            'menu.exit': 'පිටවන්න',
            
            'lang.select': 'භාෂාව තෝරන්න',
            'lang.english': 'English',
            'lang.tamil': 'தமிழ்',
            'lang.sinhala': 'සිංහල',
            
            'ui.health': 'සෞඛ්යය',
            'ui.money': 'অর්ථ',
            'ui.mission': 'මිසන්',
            'ui.wantedLevel': 'අවශ්‍ය මට්ටම',
            'ui.objectives': 'අරමුණු',
            'ui.pause': 'විරාම',
            'ui.resume': 'ඉදිරියට දිගටු කරන්න',
            
            'mission.homeAgain': 'නැවත ගෙවතුරට',
            'mission.homeAgainDesc': 'ගෙවතුරට ආපසු වී ඔබගේ පැරණි මිතුරා හමුවන්න',
            
            'status.missionStarted': 'මිසන් ආරම්භ විය',
            'status.missionComplete': 'මිසන් සම්පූර්ණ',
            'status.missionFailed': 'මිසන් අසාර්థක',
            'status.healthRestored': 'සෞඛ්යය සම්පූර්ණ',
            'status.moneyAdded': 'අර්ථ එකතු කර ඇත',
            
            'cheat.activated': 'වංචාව සක්‍රීය කරන ලද!',
            'cheat.invalid': 'අවලංගු වංචා කේතය',
        };
    }

    t(key) {
        const keys = key.split('.');
        let current = this.translations[this.currentLanguage] || {};
        for (const k of keys) {
            current = current[k];
            if (!current) return key;
        }
        return current || key;
    }

    setLanguage(lang) {
        if (this.languages.includes(lang)) {
            this.currentLanguage = lang;
            localStorage.setItem('lankaLanguage', lang);
            window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
        }
    }

    getLanguage() {
        return this.currentLanguage;
    }

    getLanguages() {
        return this.languages;
    }

    getLanguageName(lang) {
        return this.languageNames[lang] || lang;
    }
}

window.localization = new Localization();
