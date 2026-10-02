/**
 * Save System
 * Manages game saves using localStorage
 */

class SaveSystem {
    constructor() {
        this.SAVE_PREFIX = 'lanka_city_save_';
        this.SAVE_SLOTS = 3;
    }

    createSaveData(gameState) {
        return {
            timestamp: Date.now(),
            playerPosition: gameState.playerPosition,
            playerHealth: gameState.playerHealth,
            playerMoney: gameState.playerMoney,
            playerOutfit: gameState.playerOutfit,
            ownedVehicles: gameState.ownedVehicles,
            completedMissions: gameState.completedMissions,
            currentMission: gameState.currentMission,
            currentMissionProgress: gameState.currentMissionProgress,
            wantedLevel: gameState.wantedLevel,
            language: window.localization.getLanguage(),
            gameTime: gameState.gameTime,
            weather: gameState.weather,
            achievements: gameState.achievements,
            statistics: gameState.statistics
        };
    }

    save(slot, gameState) {
        try {
            const saveData = this.createSaveData(gameState);
            const key = this.SAVE_PREFIX + slot;
            localStorage.setItem(key, JSON.stringify(saveData));
            return true;
        } catch (e) {
            console.error('Failed to save game:', e);
            return false;
        }
    }

    load(slot) {
        try {
            const key = this.SAVE_PREFIX + slot;
            const data = localStorage.getItem(key);
            if (!data) return null;
            return JSON.parse(data);
        } catch (e) {
            console.error('Failed to load game:', e);
            return null;
        }
    }

    getSaveList() {
        const saves = [];
        for (let i = 0; i < this.SAVE_SLOTS; i++) {
            const save = this.load(i);
            if (save) {
                saves.push({
                    slot: i,
                    timestamp: save.timestamp,
                    date: new Date(save.timestamp).toLocaleString()
                });
            }
        }
        return saves;
    }

    deleteSave(slot) {
        try {
            const key = this.SAVE_PREFIX + slot;
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Failed to delete save:', e);
            return false;
        }
    }

    hasSave(slot) {
        return this.load(slot) !== null;
    }
}

window.saveSystem = new SaveSystem();
