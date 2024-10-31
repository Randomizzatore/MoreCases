import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { CustomItemService } from "@spt/services/mod/CustomItemService";
import { NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";
import { IPostSptLoadMod } from "@spt/models/external/IPostSptLoadMod";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { Logger } from "winston";
import { IBarterScheme, ITraderAssort } from "@spt/models/eft/common/tables/ITrader";
import { Item } from "@spt/models/eft/common/tables/IItem";
import { Traders } from "@spt/models/enums/Traders";
import { LogTextColor } from "@spt/models/spt/logging/LogTextColor";
import { ILogger } from "@spt/models/spt/utils/ILogger";

enum CurrencyIds {
    EUROS = "569668774bdc2da2298b4568",
    ROUBLES = "5449016a4bdc2d6f028b456f",
    PHYSICAL_BITCOIN = "59faff1d86f7746c51718c9c"
}

enum CustomItemIds {
    WEAPON_MODS_CASE = "WeaponModsCase",
    THICC_WEAPON_MODS_CASE = "ThiccWeaponModsCase",
    EQUIPMENT_CASE = "EquipmentCase",
    NEW_WEAPON_MODS_CASE = "NewWeaponModsCase",
    NEW_THICC_WEAPON_MODS_CASE = "NewThiccWeaponModsCase",
    FRIDGE = "Fridge",
    SAFE = "SafeMoney",
    CABINET = "EquipmentCabinet",
    CHAIR = "EquipmentChair",
    THICC_AMMO_CASE = "ThiccAmmoCase",
    THICC_MEDCASE = "ThiccMedcase",
    THICC_GRENADE_CASE = "ThiccGrenadeCase",
    WEAPON_RACK = "WeaponRack",
    TOOLBOX = "ToolBox"
}

enum AssortmentIds {
    WEAPON_MODS_CASE = "assort_weaponmodscase_0",
    THICC_WEAPON_MODS_CASE = "assort_thiccweaponmodscase_0",
    EQUIPMENT_CASE = "assort_equipmentcase_0",
    NEW_WEAPON_MODS_CASE = "assort_newweaponmodscase_0",
    NEW_THICC_WEAPON_MODS_CASE = "assort_newthiccweaponmodscase_0",
    FRIDGE = "assort_fridge_0",
    SAFE = "assort_safe_0",
    CABINET = "assort_cabinet_0",
    CHAIR = "assort_chair_0",
    THICC_AMMO_CASE = "assort_thiccammocase_0",
    THICC_MEDCASE = "assort_thiccmedcase_0",
    THICC_GRENADE_CASE = "assort_thiccgrenadecase_0",
    WEAPON_RACK = "assort_weaponrack_0",
    TOOLBOX = "assort_toolbox_0"
}

enum BarterIds {
    WEAPON_MODS_CASE = "assort_weaponmodscase_barter_0",
    THICC_WEAPON_MODS_CASE = "assort_thiccweaponmodscase_barter_0",
    EQUIPMENT_CASE = "assort_equipmentcase_barter_0",
    NEW_WEAPON_MODS_CASE = "assort_newweaponmodscase_barter_0",
    NEW_THICC_WEAPON_MODS_CASE = "assort_newthiccweaponmodscase_barter_0",
    FRIDGE = "assort_fridge_barter_0",
    SAFE = "assort_safe_barter_0",
    CABINET = "assort_cabinet_barter_0",
    CHAIR = "assort_chair_barter_0",
    THICC_AMMO_CASE = "assort_thiccammocase_barter_0",
    THICC_MEDCASE = "assort_thiccmedcase_barter_0",
    THICC_GRENADE_CASE = "assort_thiccgrenadecase_barter_0",
    WEAPON_RACK = "assort_weaponrack_barter_0",
    TOOLBOX = "assort_toolbox_barter_0"
}

class Mod implements IPostDBLoadMod, IPostSptLoadMod {
    private logger: Logger;
    private databaseServer: DatabaseServer;

    public addAssorts(): void {
        // Recupera l'assortimento del trader Mechanic
        const mechanicAssort: ITraderAssort = this.databaseServer.getTables().traders[Traders.MECHANIC].assort;
        const ragmanAssort: ITraderAssort = this.databaseServer.getTables().traders[Traders.RAGMAN].assort;
        const therapistAssort: ITraderAssort = this.databaseServer.getTables().traders[Traders.THERAPIST].assort;
        const praporAssort: ITraderAssort = this.databaseServer.getTables().traders[Traders.PRAPOR].assort;
        const jaegerAssort: ITraderAssort = this.databaseServer.getTables().traders[Traders.JAEGER].assort;
        const skierAssort: ITraderAssort = this.databaseServer.getTables().traders[Traders.SKIER].assort;

        
        // Nuovo oggetto da aggiungere
        const weaponModsCase: Item = {
            _id: AssortmentIds.WEAPON_MODS_CASE,
            _tpl: CustomItemIds.WEAPON_MODS_CASE, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const weaponModsCaseBarter: Item = {
            _id: BarterIds.WEAPON_MODS_CASE,
            _tpl: CustomItemIds.WEAPON_MODS_CASE, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        }

        const thiccWeaponModsCase: Item = {
            _id: AssortmentIds.THICC_WEAPON_MODS_CASE,
            _tpl: CustomItemIds.THICC_WEAPON_MODS_CASE, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const thiccWeaponModsCaseBarter: Item = {
            _id: BarterIds.THICC_WEAPON_MODS_CASE,
            _tpl: CustomItemIds.THICC_WEAPON_MODS_CASE, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const equipmentCase: Item = {
            _id: AssortmentIds.EQUIPMENT_CASE,
            _tpl: CustomItemIds.EQUIPMENT_CASE, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const equipmentCaseBarter: Item = {
            _id: BarterIds.EQUIPMENT_CASE,
            _tpl: CustomItemIds.EQUIPMENT_CASE, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const newWeaponModsCase: Item = {
            _id: AssortmentIds.NEW_WEAPON_MODS_CASE,
            _tpl: CustomItemIds.NEW_WEAPON_MODS_CASE, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const newWeaponModsCaseBarter: Item = {
            _id: BarterIds.NEW_WEAPON_MODS_CASE,
            _tpl: CustomItemIds.NEW_WEAPON_MODS_CASE, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const newThiccWeaponModsCase: Item = {
            _id: AssortmentIds.NEW_THICC_WEAPON_MODS_CASE,
            _tpl: CustomItemIds.NEW_THICC_WEAPON_MODS_CASE, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const newThiccWeaponModsCaseBarter: Item = {
            _id: BarterIds.NEW_THICC_WEAPON_MODS_CASE,
            _tpl: CustomItemIds.NEW_THICC_WEAPON_MODS_CASE, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const fridge: Item = {
            _id: AssortmentIds.FRIDGE,
            _tpl: CustomItemIds.FRIDGE, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const fridgeBarter: Item = {
            _id: BarterIds.FRIDGE,
            _tpl: CustomItemIds.FRIDGE, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const safe: Item = {
            _id: AssortmentIds.SAFE,
            _tpl: CustomItemIds.SAFE, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const safeBarter: Item = {
            _id: BarterIds.SAFE,
            _tpl: CustomItemIds.SAFE, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const cabinet: Item = {
            _id: AssortmentIds.CABINET,
            _tpl: CustomItemIds.CABINET, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const cabinetBarter: Item = {
            _id: BarterIds.CABINET,
            _tpl: CustomItemIds.CABINET, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const chair: Item = {
            _id: AssortmentIds.CHAIR,
            _tpl: CustomItemIds.CHAIR, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const chairBarter: Item = {
            _id: BarterIds.CHAIR,
            _tpl: CustomItemIds.CHAIR, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const thiccAmmoCase: Item = {
            _id: AssortmentIds.THICC_AMMO_CASE,
            _tpl: CustomItemIds.THICC_AMMO_CASE, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const thiccAmmoCaseBarter: Item = {
            _id: BarterIds.THICC_AMMO_CASE,
            _tpl: CustomItemIds.THICC_AMMO_CASE, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const thiccMedcase: Item = {
            _id: AssortmentIds.THICC_MEDCASE,
            _tpl: CustomItemIds.THICC_MEDCASE, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const thiccMedcaseBarter: Item = {
            _id: BarterIds.THICC_MEDCASE,
            _tpl: CustomItemIds.THICC_MEDCASE, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const thiccGrenadeCase: Item = {
            _id: AssortmentIds.THICC_GRENADE_CASE,
            _tpl: CustomItemIds.THICC_GRENADE_CASE, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const thiccGrenadeCaseBarter: Item = {
            _id: BarterIds.THICC_GRENADE_CASE,
            _tpl: CustomItemIds.THICC_GRENADE_CASE, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const weaponRack: Item = {
            _id: AssortmentIds.WEAPON_RACK,
            _tpl: CustomItemIds.WEAPON_RACK, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const weaponRackBarter: Item = {
            _id: BarterIds.WEAPON_RACK,
            _tpl: CustomItemIds.WEAPON_RACK, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const toolbox: Item = {
            _id: AssortmentIds.TOOLBOX,
            _tpl: CustomItemIds.TOOLBOX, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const toolboxBarter: Item = {
            _id: BarterIds.TOOLBOX,
            _tpl: CustomItemIds.TOOLBOX, // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        // Prezzo dell'oggetto
        const newWeaponModsCasePrice: IBarterScheme = {
            count: 9800, // Prezzo in rubli, o altri tipi di valuta
            _tpl: CurrencyIds.EUROS // ID della valuta (es. Rubli)
        };

        const newWeaponModsCaseBarterRequirements: IBarterScheme = {
            count: 3, // Numero di oggetti richiesti per il barter
            _tpl: CurrencyIds.PHYSICAL_BITCOIN // Template ID del primo oggetto richiesto
        }

        const newThiccWeaponModsCasePrice: IBarterScheme = {
            count: 60000, // Prezzo in rubli, o altri tipi di valuta
            _tpl: CurrencyIds.EUROS // ID della valuta (es. Rubli)
        };

        const newThiccWeaponModsCaseBarterRequirements: IBarterScheme = {
            count: 10, // Numero di oggetti richiesti per il barter
            _tpl: CurrencyIds.PHYSICAL_BITCOIN // Template ID del primo oggetto richiesto
        }

        const cabinetPrice: IBarterScheme = {
            count: 3394561, // Prezzo in rubli, o altri tipi di valuta
            _tpl: CurrencyIds.ROUBLES // ID della valuta (es. Rubli)
        };

        const cabinetBarterRequirements: IBarterScheme[] = [
            {
                count: 4, // Numero di oggetti richiesti per il barter
                _tpl: "59e7715586f7742ee5789605" // Template ID del primo oggetto richiesto
            },
            {
                count: 4, // Numero di oggetti richiesti per il barter
                _tpl: "5df8a58286f77412631087ed" // Template ID del primo oggetto richiesto
            },
            {
                count: 4, // Numero di oggetti richiesti per il barter
                _tpl: "5b4329075acfc400153b78ff" // Template ID del primo oggetto richiesto
            }
        ]

        const fridgePrice: IBarterScheme = {
            count: 9876540, // Prezzo in rubli, o altri tipi di valuta
            _tpl: CurrencyIds.ROUBLES // ID della valuta (es. Rubli)
        };

        const fridgeBarterRequirements: IBarterScheme[] = [
            {
                count: 4, // Numero di oggetti richiesti per il barter
                _tpl: "5e8f3423fd7471236e6e3b64" // Template ID del primo oggetto richiesto
            },
            {
                count: 4, // Numero di oggetti richiesti per il barter
                _tpl: "635a758bfefc88a93f021b8a" // Template ID del primo oggetto richiesto
            },
            {
                count: 4, // Numero di oggetti richiesti per il barter
                _tpl: "60b0f93284c20f0feb453da7" // Template ID del primo oggetto richiesto
            },
            {
                count: 4, // Numero di oggetti richiesti per il barter
                _tpl: "5c0fa877d174af02a012e1cf" // Template ID del primo oggetto richiesto
            },
            {
                count: 1, // Numero di oggetti richiesti per il barter
                _tpl: "5d1b33a686f7742523398398" // Template ID del primo oggetto richiesto
            },
            {
                count: 1, // Numero di oggetti richiesti per il barter
                _tpl: "5d1b376e86f774252519444e" // Template ID del primo oggetto richiesto
            }
        ]

        const safePrice: IBarterScheme = {
            count: 34000000, // Prezzo in rubli, o altri tipi di valuta
            _tpl: CurrencyIds.ROUBLES // ID della valuta (es. Rubli)
        };

        const safeBarterRequirements: IBarterScheme[] = [
            {
                count: 2, // Numero di oggetti richiesti per il barter
                _tpl: "5bc9bc53d4351e00367fbcee" // Template ID del primo oggetto richiesto
            },
            {
                count: 2, // Numero di oggetti richiesti per il barter
                _tpl: "590de71386f774347051a052" // Template ID del primo oggetto richiesto
            },
            {
                count: 2, // Numero di oggetti richiesti per il barter
                _tpl: "62a091170b9d3c46de5b6cf2" // Template ID del primo oggetto richiesto
            },
            {
                count: 2, // Numero di oggetti richiesti per il barter
                _tpl: "5bc9c049d4351e44f824d360" // Template ID del primo oggetto richiesto
            },
            {
                count: 2, // Numero di oggetti richiesti per il barter
                _tpl: "59e3639286f7741777737013" // Template ID del primo oggetto richiesto
            },
            {
                count: 2, // Numero di oggetti richiesti per il barter
                _tpl: "59e3658a86f7741776641ac4" // Template ID del primo oggetto richiesto
            },
            {
                count: 2, // Numero di oggetti richiesti per il barter
                _tpl: "5d235a5986f77443f6329bc6" // Template ID del primo oggetto richiesto
            },
            {
                count: 2, // Numero di oggetti richiesti per il barter
                _tpl: "62a09cfe4f842e1bd12da3e4" // Template ID del primo oggetto richiesto
            },
            {
                count: 2, // Numero di oggetti richiesti per il barter
                _tpl: "5734758f24597738025ee253" // Template ID del primo oggetto richiesto
            },
            {
                count: 2, // Numero di oggetti richiesti per il barter
                _tpl: "573478bc24597738002c6175" // Template ID del primo oggetto richiesto
            },
            {
                count: 2, // Numero di oggetti richiesti per il barter
                _tpl: "59e3647686f774176a362507" // Template ID del primo oggetto richiesto
            },
            {
                count: 2, // Numero di oggetti richiesti per il barter
                _tpl: "59faf7ca86f7740dbe19f6c2" // Template ID del primo oggetto richiesto
            },
            {
                count: 2, // Numero di oggetti richiesti per il barter
                _tpl: "5e54f62086f774219b0f1937" // Template ID del primo oggetto richiesto
            }
        ]

        const chairPrice: IBarterScheme = {
            count: 6789000, // Prezzo in rubli, o altri tipi di valuta
            _tpl: CurrencyIds.ROUBLES // ID della valuta (es. Rubli)
        };

        const chairBarterRequirements: IBarterScheme[] = [
            {
                count: 6, // Numero di oggetti richiesti per il barter
                _tpl: "60bf74184a63fc79b60c57f6" // Template ID del primo oggetto richiesto
            },
            {
                count: 6, // Numero di oggetti richiesti per il barter
                _tpl: "5bd073c986f7747f627e796c" // Template ID del primo oggetto richiesto
            },
            {
                count: 6, // Numero di oggetti richiesti per il barter
                _tpl: "5fd8d28367cb5e077335170f" // Template ID del primo oggetto richiesto
            },
            {
                count: 6, // Numero di oggetti richiesti per il barter
                _tpl: "5e54f76986f7740366043752" // Template ID del primo oggetto richiesto
            }
        ]

        const thiccAmmoCasePrice: IBarterScheme = {
            count: 8750000, // Prezzo in rubli, o altri tipi di valuta
            _tpl: CurrencyIds.ROUBLES // ID della valuta (es. Rubli)
        };

        const thiccAmmoCaseBarterRequirements: IBarterScheme[] = [
            {
                count: 2, // Numero di oggetti richiesti per il barter
                _tpl: "5d03794386f77420415576f5" // Template ID del primo oggetto richiesto
            },
            {
                count: 2, // Numero di oggetti richiesti per il barter
                _tpl: "6389c7750ef44505c87f5996" // Template ID del primo oggetto richiesto
            }
        ]

        const thiccMedcasePrice: IBarterScheme = {
            count: 13450000, // Prezzo in rubli, o altri tipi di valuta
            _tpl: CurrencyIds.ROUBLES // ID della valuta (es. Rubli)
        };

        const thiccMedcaseBarterRequirements: IBarterScheme[] = [
            {
                count: 10, // Numero di oggetti richiesti per il barter
                _tpl: "5ed51652f6c34d2cc26336a1" // Template ID del primo oggetto richiesto
            },
            {
                count: 10, // Numero di oggetti richiesti per il barter
                _tpl: "5ed5166ad380ab312177c100" // Template ID del primo oggetto richiesto
            },
            {
                count: 10, // Numero di oggetti richiesti per il barter
                _tpl: "637b6251104668754b72f8f9" // Template ID del primo oggetto richiesto
            },
            {
                count: 10, // Numero di oggetti richiesti per il barter
                _tpl: "5fca138c2a7b221b2852a5c6" // Template ID del primo oggetto richiesto
            },
            {
                count: 10, // Numero di oggetti richiesti per il barter
                _tpl: "5751a89d24597722aa0e8db0" // Template ID del primo oggetto richiesto
            }
        ]

        const thiccGrenadeCasePrice: IBarterScheme = {
            count: 13450000, // Prezzo in rubli, o altri tipi di valuta
            _tpl: CurrencyIds.ROUBLES // ID della valuta (es. Rubli)
        };

        const thiccGrenadeCaseBarterRequirements: IBarterScheme[] = [
            {
                count: 10, // Numero di oggetti richiesti per il barter
                _tpl: "5d0379a886f77420407aa271" // Template ID del primo oggetto richiesto
            },
            {
                count: 4, // Numero di oggetti richiesti per il barter
                _tpl: "5d0377ce86f774186372f689" // Template ID del primo oggetto richiesto
            },
            {
                count: 4, // Numero di oggetti richiesti per il barter
                _tpl: "5d0376a486f7747d8050965c" // Template ID del primo oggetto richiesto
            },
            {
                count: 4, // Numero di oggetti richiesti per il barter
                _tpl: "5d03784a86f774203e7e0c4d" // Template ID del primo oggetto richiesto
            }
        ]

        const weaponRackPrice: IBarterScheme = {
            count: 12900000, // Prezzo in rubli, o altri tipi di valuta
            _tpl: CurrencyIds.ROUBLES // ID della valuta (es. Rubli)
        };

        const weaponRackBarterRequirements: IBarterScheme[] = [
            {
                count: 10, // Numero di oggetti richiesti per il barter
                _tpl: "62a0a16d0b9d3c46de5b6e97" // Template ID del primo oggetto richiesto
            },
            {
                count: 1, // Numero di oggetti richiesti per il barter
                _tpl: "6389c92d52123d5dd17f8876" // Template ID del primo oggetto richiesto
            },
            {
                count: 1, // Numero di oggetti richiesti per il barter
                _tpl: "6389c8fb46b54c634724d847" // Template ID del primo oggetto richiesto
            },
            {
                count: 1, // Numero di oggetti richiesti per il barter
                _tpl: "6389c8c5dbfd5e4b95197e6b" // Template ID del primo oggetto richiesto
            }
        ]

        const toolboxPrice: IBarterScheme = {
            count: 333000, // Prezzo in rubli, o altri tipi di valuta
            _tpl: CurrencyIds.ROUBLES // ID della valuta (es. Rubli)
        };

        const toolboxBarterRequirements: IBarterScheme[] = [
            {
                count: 1, // Numero di oggetti richiesti per il barter
                _tpl: "62a0a0bb621468534a797ad5" // Template ID del primo oggetto richiesto
            },
            {
                count: 3, // Numero di oggetti richiesti per il barter
                _tpl: "590c2e1186f77425357b6124" // Template ID del primo oggetto richiesto
            }
        ]

        // ASSORT GENERATION HERE
//      mechanicAssort.items.push(weaponModsCase);
//      mechanicAssort.items.push(weaponModsCaseBarter);
//      mechanicAssort.items.push(thiccWeaponModsCase);
//      mechanicAssort.items.push(thiccWeaponModsCaseBarter);
//      ragmanAssort.items.push(equipmentCase);
//      ragmanAssort.items.push(equipmentCaseBarter);
        mechanicAssort.items.push(newWeaponModsCase);
        mechanicAssort.items.push(newWeaponModsCaseBarter);
        mechanicAssort.items.push(newThiccWeaponModsCase);
        mechanicAssort.items.push(newThiccWeaponModsCaseBarter);
        ragmanAssort.items.push(cabinet);
        ragmanAssort.items.push(cabinetBarter);
        ragmanAssort.items.push(chair);
        ragmanAssort.items.push(chairBarter);
        jaegerAssort.items.push(fridge);
        jaegerAssort.items.push(fridgeBarter);
        praporAssort.items.push(thiccAmmoCase);
        praporAssort.items.push(thiccAmmoCaseBarter);
        jaegerAssort.items.push(safe);
        jaegerAssort.items.push(safeBarter);
        therapistAssort.items.push(thiccMedcase);
        therapistAssort.items.push(thiccMedcaseBarter);
        praporAssort.items.push(thiccGrenadeCase);
        praporAssort.items.push(thiccGrenadeCaseBarter);
        praporAssort.items.push(weaponRack);
        praporAssort.items.push(weaponRackBarter);
        skierAssort.items.push(toolbox);
        skierAssort.items.push(toolboxBarter);

        // ASSORT DEFINITION HERE
//      mechanicAssort.barter_scheme[weaponModsCase._id] = [[weaponModsCasePrice]];
//      mechanicAssort.barter_scheme[weaponModsCaseBarter._id] = [[weaponModsCaseBarterRequirements]];
//      mechanicAssort.barter_scheme[thiccWeaponModsCase._id] = [[thiccWeaponModsCasePrice]];
//      mechanicAssort.barter_scheme[thiccWeaponModsCaseBarter._id] = [[thiccWeaponModsCaseBarterRequirements]];
//      ragmanAssort.barter_scheme[equipmentCase._id] = [[equipmentCasePrice]];
//      ragmanAssort.barter_scheme[equipmentCaseBarter._id] = [equipmentCaseBarterRequirements];
        mechanicAssort.barter_scheme[newWeaponModsCase._id] = [[newWeaponModsCasePrice]];
        mechanicAssort.barter_scheme[newWeaponModsCaseBarter._id] = [[newWeaponModsCaseBarterRequirements]];
        mechanicAssort.barter_scheme[newThiccWeaponModsCase._id] = [[newThiccWeaponModsCasePrice]];
        mechanicAssort.barter_scheme[newThiccWeaponModsCaseBarter._id] = [[newThiccWeaponModsCaseBarterRequirements]];
        ragmanAssort.barter_scheme[cabinet._id] = [[cabinetPrice]];
        ragmanAssort.barter_scheme[cabinetBarter._id] = [cabinetBarterRequirements];
        ragmanAssort.barter_scheme[chair._id] = [[chairPrice]];
        ragmanAssort.barter_scheme[chairBarter._id] = [chairBarterRequirements];
        jaegerAssort.barter_scheme[fridge._id] = [[fridgePrice]];
        jaegerAssort.barter_scheme[fridgeBarter._id] = [fridgeBarterRequirements];
        praporAssort.barter_scheme[thiccAmmoCase._id] = [[thiccAmmoCasePrice]];
        praporAssort.barter_scheme[thiccAmmoCaseBarter._id] = [thiccAmmoCaseBarterRequirements];
        jaegerAssort.barter_scheme[safe._id] = [[safePrice]];
        jaegerAssort.barter_scheme[safeBarter._id] = [safeBarterRequirements];
        therapistAssort.barter_scheme[thiccMedcase._id] = [[thiccMedcasePrice]];
        therapistAssort.barter_scheme[thiccMedcaseBarter._id] = [thiccMedcaseBarterRequirements];
        praporAssort.barter_scheme[thiccGrenadeCase._id] = [[thiccGrenadeCasePrice]];
        praporAssort.barter_scheme[thiccGrenadeCaseBarter._id] = [thiccGrenadeCaseBarterRequirements];
        praporAssort.barter_scheme[weaponRack._id] = [[weaponRackPrice]];
        praporAssort.barter_scheme[weaponRackBarter._id] = [weaponRackBarterRequirements];
        skierAssort.barter_scheme[toolbox._id] = [[toolboxPrice]];
        skierAssort.barter_scheme[toolboxBarter._id] = [toolboxBarterRequirements];

        // ASSORT LOYALTY LEVEL HERE
//      mechanicAssort.loyal_level_items[weaponModsCase._id] = 2;
//      mechanicAssort.loyal_level_items[weaponModsCaseBarter._id] = 2;
//      mechanicAssort.loyal_level_items[thiccWeaponModsCase._id] = 4;
//      mechanicAssort.loyal_level_items[thiccWeaponModsCaseBarter._id] = 3;
//      ragmanAssort.loyal_level_items[equipmentCase._id] = 3;
//      ragmanAssort.loyal_level_items[equipmentCaseBarter._id] = 2;
        mechanicAssort.loyal_level_items[newWeaponModsCase._id] = 3;
        mechanicAssort.loyal_level_items[newWeaponModsCaseBarter._id] = 2;
        mechanicAssort.loyal_level_items[newThiccWeaponModsCase._id] = 4;
        mechanicAssort.loyal_level_items[newThiccWeaponModsCaseBarter._id] = 3;
        ragmanAssort.loyal_level_items[cabinet._id] = 3;
        ragmanAssort.loyal_level_items[cabinetBarter._id] = 2;
        ragmanAssort.loyal_level_items[chair._id] = 4;
        ragmanAssort.loyal_level_items[chairBarter._id] = 3;
        jaegerAssort.loyal_level_items[fridge._id] = 4;
        jaegerAssort.loyal_level_items[fridgeBarter._id] = 3;
        praporAssort.loyal_level_items[thiccAmmoCase._id] = 4;
        praporAssort.loyal_level_items[thiccAmmoCaseBarter._id] = 3;
        jaegerAssort.loyal_level_items[safe._id] = 4;
        jaegerAssort.loyal_level_items[safeBarter._id] = 3;
        therapistAssort.loyal_level_items[thiccMedcase._id] = 4;
        therapistAssort.loyal_level_items[thiccMedcaseBarter._id] = 3;
        praporAssort.loyal_level_items[thiccGrenadeCase._id] = 4;
        praporAssort.loyal_level_items[thiccGrenadeCaseBarter._id] = 3;
        praporAssort.loyal_level_items[weaponRack._id] = 4;
        praporAssort.loyal_level_items[weaponRackBarter._id] = 3;
        skierAssort.loyal_level_items[toolbox._id] = 1;
        skierAssort.loyal_level_items[toolboxBarter._id] = 1;
    }

    public postDBLoad(container: DependencyContainer): void {
        // Resolve the CustomItemService container
        this.databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const customItemService = container.resolve<CustomItemService>("CustomItemService");

        //Example of adding new item by cloning existing item using createclonedetails
        const weaponModsCaseItem: NewItemFromCloneDetails = {
            itemTplToClone: "5aafbde786f774389d0cbc0f", //the item we want to clone
            overrideProperties: {
                Width: 3,
                Height: 2,
                Weight: 4.5,
                Prefab: {
                    path: "assets/content/items/containers/item_container_smallitems/item_container_smallitems.bundle",
                    rcid: ""
                },
                Grids: [
                    {
                        _name: "main",
                        _id: "weaponmodscasegrid",
                        _parent: CustomItemIds.WEAPON_MODS_CASE,
                        _props: {
                            filters: [
                                {
                                    Filter: [
                                        "5448fe124bdc2da5018b4567"
                                    ],
                                    ExcludedFilter: [
                                        "5448bc234bdc2d3c308b4569"
                                    ]
                                }
                            ],
                            cellsH: 8,
                            cellsV: 8,
                            minCount: 0,
                            maxCount: 0,
                            maxWeight: 0,
                            isSortingTable: false
                        },
                        _proto: "55d329c24bdc2d892f8b4567"
                    }
                ]

            }, //Overried properties basically tell the server on what data inside _props to be modified from the cloned item
            parentId: "5795f317245977243854e041", //ParentId refers to the Node item the gun will be under, you can check it in https://db.sp-tarkov.com/search
            newId: CustomItemIds.WEAPON_MODS_CASE, //The new id of our cloned item
            fleaPriceRoubles: 1000000, //Self explanatary
            handbookPriceRoubles: 1000000,
            handbookParentId: "5b5f6fa186f77409407a7eb7", //Handbook Parent Id refers to the category the gun will be under
            //you see those side box tab thing that only select gun under specific icon? Handbook parent can be found in Aki_Data\Server\database\templates.
            locales: {
                en: {
                    name: "OLD Weapon Modifications case PLEASE SELL THIS AND BUY NEW CASE",
                    shortName: "READ THE ITEM DESCRIPTION!!!",
                    description: "This is the old Weapon Modifications Case from 1.0.0. If you are reading this you are on a newer version (1.1.0+). It is recommended to empty this container and sell it, or you can discard it and give yourself the equivalent item from Commando with the command [spt give \"Weapon Mods Case\" 1]. For help contact Randomizzatore on Discord!"
                }
            }
        };

        const thiccWeaponModsCaseItem: NewItemFromCloneDetails = {
            itemTplToClone: "5aafbde786f774389d0cbc0f", //the item we want to clone
            overrideProperties: {
                Width: 4,
                Height: 3,
                Weight: 10,
                Prefab: {
                    path: "assets/content/items/containers/double_gun_case/item_double_gun_case.bundle",
                    rcid: ""
                },
                Grids: [
                    {
                        _name: "main",
                        _id: "thiccweaponmodscasegrid",
                        _parent: CustomItemIds.THICC_WEAPON_MODS_CASE,
                        _props: {
                            filters: [
                                {
                                    Filter: [
                                        "5448fe124bdc2da5018b4567"
                                    ],
                                    ExcludedFilter: [
                                        "5448bc234bdc2d3c308b4569"
                                    ]
                                }
                            ],
                            cellsH: 14,
                            cellsV: 14,
                            minCount: 0,
                            maxCount: 0,
                            maxWeight: 0,
                            isSortingTable: false
                        },
                        _proto: "55d329c24bdc2d892f8b4567"
                    }
                ]

            }, //Overried properties basically tell the server on what data inside _props to be modified from the cloned item
            parentId: "5795f317245977243854e041", //ParentId refers to the Node item the gun will be under, you can check it in https://db.sp-tarkov.com/search
            newId: CustomItemIds.THICC_WEAPON_MODS_CASE, //The new id of our cloned item
            fleaPriceRoubles: 9809800, //Self explanatary
            handbookPriceRoubles: 9809800,
            handbookParentId: "5b5f6fa186f77409407a7eb7", //Handbook Parent Id refers to the category the gun will be under
            //you see those side box tab thing that only select gun under specific icon? Handbook parent can be found in Aki_Data\Server\database\templates.
            locales: {
                en: {
                    name: "OLD T H I C C Weapon Modifications case PLEASE SELL THIS AND BUY NEW CASE",
                    shortName: "READ THE ITEM DESCRIPTION!!!",
                    description: "This is the old T H I C C Weapon Modifications Case from 1.0.0. If you are reading this you are on a newer version (1.1.0+). It is recommended to empty this container and sell it, or you can discard it and give yourself the equivalent item from Commando with the command [spt give \"T H I C C Weapon Mods Case\" 1]. For help contact Randomizzatore on Discord!"
                }
            }
        };

        const equipmentCaseItem: NewItemFromCloneDetails = {
            itemTplToClone: "567143bf4bdc2d1a0f8b4567", //the item we want to clone
            overrideProperties: {
                Width: 4,
                Height: 4,
                Weight: 12,
                Prefab: {
                    path: "assets/content/items/containers/pistol_case/item_container_pistol_case.bundle",
                    rcid: ""
                },
                Grids: [
                    {
                        _name: "main",
                        _id: "gearcasegrid",
                        _parent: CustomItemIds.EQUIPMENT_CASE,
                        _props: {
                            filters: [
                                {
                                    Filter: [
                                        "543be5f84bdc2dd4348b456a",
                                        "5448e5284bdc2dcb718b4567",
                                        "5448e53e4bdc2d60728b4567",
                                    ],
                                    ExcludedFilter: [
                                        "5795f317245977243854e041"
                                    ]
                                }
                            ],
                            cellsH: 14,
                            cellsV: 14,
                            minCount: 0,
                            maxCount: 0,
                            maxWeight: 0,
                            isSortingTable: false
                        },
                        _proto: "55d329c24bdc2d892f8b4567"
                    }
                ]

            }, //Overried properties basically tell the server on what data inside _props to be modified from the cloned item
            parentId: "5795f317245977243854e041", //ParentId refers to the Node item the gun will be under, you can check it in https://db.sp-tarkov.com/search
            newId: CustomItemIds.EQUIPMENT_CASE, //The new id of our cloned item
            fleaPriceRoubles: 6789123, //Self explanatary
            handbookPriceRoubles: 6789123,
            handbookParentId: "5b5f6fa186f77409407a7eb7", //Handbook Parent Id refers to the category the gun will be under
            //you see those side box tab thing that only select gun under specific icon? Handbook parent can be found in Aki_Data\Server\database\templates.
            locales: {
                en: {
                    name: "OLD Equipment Case PLEASE SELL THIS AND BUY NEW CASE",
                    shortName: "READ THE ITEM DESCRIPTION!!!",
                    description: "This is the old Equipment Case Case from 1.0.0. If you are reading this you are on a newer version (1.1.0+). It is recommended to empty this container and sell it, or you can discard it and give yourself the equivalent item from Commando with the command [spt give \"Equipment Chair\" 1]. For help contact Randomizzatore on Discord!"
                }
            }
        };

        const newWeaponModsCaseItem: NewItemFromCloneDetails = {
            itemTplToClone: "5aafbde786f774389d0cbc0f", //the item we want to clone
            overrideProperties: {
                Width: 3,
                Height: 3,
                Weight: 4.5,
                Prefab: {
                    path: "newweaponmodificationscase.bundle",
                    rcid: ""
                },
                Grids: [
                    {
                        _name: "main",
                        _id: "newweaponmodscasegrid",
                        _parent: CustomItemIds.NEW_WEAPON_MODS_CASE,
                        _props: {
                            filters: [
                                {
                                    Filter: [
                                        "5448fe124bdc2da5018b4567"
                                    ],
                                    ExcludedFilter: [
                                        "5448bc234bdc2d3c308b4569"
                                    ]
                                }
                            ],
                            cellsH: 8,
                            cellsV: 8,
                            minCount: 0,
                            maxCount: 0,
                            maxWeight: 0,
                            isSortingTable: false
                        },
                        _proto: "55d329c24bdc2d892f8b4567"
                    }
                ]

            }, //Overried properties basically tell the server on what data inside _props to be modified from the cloned item
            parentId: "5795f317245977243854e041", //ParentId refers to the Node item the gun will be under, you can check it in https://db.sp-tarkov.com/search
            newId: CustomItemIds.NEW_WEAPON_MODS_CASE, //The new id of our cloned item
            fleaPriceRoubles: 1000000, //Self explanatary
            handbookPriceRoubles: 1000000,
            handbookParentId: "5b5f6fa186f77409407a7eb7", //Handbook Parent Id refers to the category the gun will be under
            //you see those side box tab thing that only select gun under specific icon? Handbook parent can be found in Aki_Data\Server\database\templates.
            locales: {
                en: {
                    name: "Weapon Modifications case",
                    shortName: "Mods Case",
                    description: "A case specifically designed to contain weapon modifications. Now with a new look!"
                }
            }
        }

        const newThiccWeaponModsCaseItem: NewItemFromCloneDetails = {
            itemTplToClone: "5aafbde786f774389d0cbc0f", //the item we want to clone
            overrideProperties: {
                Width: 6,
                Height: 3,
                Weight: 10,
                BackgroundColor: "violet",
                Prefab: {
                    path: "newthiccweaponmodificationscase.bundle",
                    rcid: ""
                },
                Grids: [
                    {
                        _name: "main",
                        _id: "newthiccweaponmodscasegrid",
                        _parent: CustomItemIds.NEW_THICC_WEAPON_MODS_CASE,
                        _props: {
                            filters: [
                                {
                                    Filter: [
                                        "5448fe124bdc2da5018b4567"
                                    ],
                                    ExcludedFilter: [
                                        "5448bc234bdc2d3c308b4569"
                                    ]
                                }
                            ],
                            cellsH: 14,
                            cellsV: 14,
                            minCount: 0,
                            maxCount: 0,
                            maxWeight: 0,
                            isSortingTable: false
                        },
                        _proto: "55d329c24bdc2d892f8b4567"
                    }
                ]

            }, //Overried properties basically tell the server on what data inside _props to be modified from the cloned item
            parentId: "5795f317245977243854e041", //ParentId refers to the Node item the gun will be under, you can check it in https://db.sp-tarkov.com/search
            newId: CustomItemIds.NEW_THICC_WEAPON_MODS_CASE, //The new id of our cloned item
            fleaPriceRoubles: 9809800, //Self explanatary
            handbookPriceRoubles: 9809800,
            handbookParentId: "5b5f6fa186f77409407a7eb7", //Handbook Parent Id refers to the category the gun will be under
            //you see those side box tab thing that only select gun under specific icon? Handbook parent can be found in Aki_Data\Server\database\templates.
            locales: {
                en: {
                    name: "T H I C C Weapon Modifications case",
                    shortName: "T H I C C Mods Case",
                    description: "A case specifically designed to contain weapon modifications.\nBut now it's THICC... and with a new look too!"
                }
            }
        };

        const equipmentCabinetItem: NewItemFromCloneDetails = {
            itemTplToClone: "567143bf4bdc2d1a0f8b4567", //the item we want to clone
            overrideProperties: {
                Width: 4,
                Height: 6,
                Weight: 18,
                Prefab: {
                    path: "medicalcabinet.bundle",
                    rcid: ""
                },
                Grids: [
                    {
                        _name: "main",
                        _id: "equipmentcabinetgrid",
                        _parent: CustomItemIds.CABINET,
                        _props: {
                            filters: [
                                {
                                    Filter: [
                                        "543be5f84bdc2dd4348b456a",
                                        "5448e5284bdc2dcb718b4567",
                                        "5448e53e4bdc2d60728b4567",
                                    ],
                                    ExcludedFilter: [
                                        "5795f317245977243854e041"
                                    ]
                                }
                            ],
                            cellsH: 7,
                            cellsV: 14,
                            minCount: 0,
                            maxCount: 0,
                            maxWeight: 0,
                            isSortingTable: false
                        },
                        _proto: "55d329c24bdc2d892f8b4567"
                    }
                ]

            }, //Overried properties basically tell the server on what data inside _props to be modified from the cloned item
            parentId: "5795f317245977243854e041", //ParentId refers to the Node item the gun will be under, you can check it in https://db.sp-tarkov.com/search
            newId: CustomItemIds.CABINET, //The new id of our cloned item
            fleaPriceRoubles: 3330300, //Self explanatary
            handbookPriceRoubles: 3330300,
            handbookParentId: "5b5f6fa186f77409407a7eb7", //Handbook Parent Id refers to the category the gun will be under
            //you see those side box tab thing that only select gun under specific icon? Handbook parent can be found in Aki_Data\Server\database\templates.
            locales: {
                en: {
                    name: "Equipment Cabinet",
                    shortName: "Cabinet",
                    description: "A cabinet specifically designed to contain equipment for your PMC. Probably stolen from one of EMERCOM medical units."
                }
            }
        };

        const equipmentChairItem: NewItemFromCloneDetails = {
            itemTplToClone: "567143bf4bdc2d1a0f8b4567", //the item we want to clone
            overrideProperties: {
                Width: 4,
                Height: 4,
                Weight: 4,
                BackgroundColor: "violet",
                Prefab: {
                    path: "plasticchairwithpileofclothes.bundle",
                    rcid: ""
                },
                Grids: [
                    {
                        _name: "main",
                        _id: "equipmentchairgrid",
                        _parent: CustomItemIds.CHAIR,
                        _props: {
                            filters: [
                                {
                                    Filter: [
                                        "543be5f84bdc2dd4348b456a",
                                        "5448e5284bdc2dcb718b4567",
                                        "5448e53e4bdc2d60728b4567",
                                    ],
                                    ExcludedFilter: [
                                        "5795f317245977243854e041"
                                    ]
                                }
                            ],
                            cellsH: 14,
                            cellsV: 14,
                            minCount: 0,
                            maxCount: 0,
                            maxWeight: 0,
                            isSortingTable: false
                        },
                        _proto: "55d329c24bdc2d892f8b4567"
                    }
                ]

            }, //Overried properties basically tell the server on what data inside _props to be modified from the cloned item
            parentId: "5795f317245977243854e041", //ParentId refers to the Node item the gun will be under, you can check it in https://db.sp-tarkov.com/search
            newId: CustomItemIds.CHAIR, //The new id of our cloned item
            fleaPriceRoubles: 6789123, //Self explanatary
            handbookPriceRoubles: 6789123,
            handbookParentId: "5b5f6fa186f77409407a7eb7", //Handbook Parent Id refers to the category the gun will be under
            //you see those side box tab thing that only select gun under specific icon? Handbook parent can be found in Aki_Data\Server\database\templates.
            locales: {
                en: {
                    name: "Equipment Chair",
                    shortName: "Chair",
                    description: "Anyone with a confused or cluttered mind, anyone who's always in a rush, anyone who has no more room in their closet, can only rely on one thing... the chair! Ragman was taken aback when you told him that instead of a closet, you'd rather just have a chair to pile up all your gear."
                }
            }
        };

        const safeMoneyContainerItem: NewItemFromCloneDetails = {
            itemTplToClone: "59fb016586f7746d0d4b423a", //the item we want to clone
            overrideProperties: {
                Width: 3,
                Height: 4,
                Weight: 20,
                ItemSound: "generic",
                BackgroundColor: "violet",
                Prefab: {
                    path: "safe_money.bundle",
                    rcid: ""
                },
                Grids: [
                    {
                        _name: "main",
                        _id: "safemoneygrid",
                        _parent: CustomItemIds.SAFE,
                        _props: {
                            filters: [
                                {
                                    Filter: [
                                        "543be5dd4bdc2deb348b4569",
                                        "57864a3d24597754843f8721"
                                    ],
                                    ExcludedFilter: [
                                        ""
                                    ]
                                }
                            ],
                            cellsH: 14,
                            cellsV: 14,
                            minCount: 0,
                            maxCount: 0,
                            maxWeight: 0,
                            isSortingTable: false
                        },
                        _proto: "55d329c24bdc2d892f8b4567"
                    }
                ]

            }, //Overried properties basically tell the server on what data inside _props to be modified from the cloned item
            parentId: "5795f317245977243854e041", //ParentId refers to the Node item the gun will be under, you can check it in https://db.sp-tarkov.com/search
            newId: CustomItemIds.SAFE, //The new id of our cloned item
            fleaPriceRoubles: 9876543, //Self explanatary
            handbookPriceRoubles: 9876543,
            handbookParentId: "5b5f6fa186f77409407a7eb7", //Handbook Parent Id refers to the category the gun will be under
            //you see those side box tab thing that only select gun under specific icon? Handbook parent can be found in Aki_Data\Server\database\templates.
            locales: {
                en: {
                    name: "Safe",
                    shortName: "Safe",
                    description: "A safe for keeping all your valuable items, money and jewelry... safe."
                }
            }
        };

        const fridgeItem: NewItemFromCloneDetails = {
            itemTplToClone: "5c093db286f7740a1b2617e3", //the item we want to clone
            overrideProperties: {
                Width: 4,
                Height: 8,
                Weight: 50,
                BackgroundColor: "violet",
                Prefab: {
                    path: "fridge.bundle",
                    rcid: ""
                },
                Grids: [
                    {
                        _name: "main",
                        _id: "fridgegrid",
                        _parent: CustomItemIds.FRIDGE,
                        _props: {
                            filters: [
                                {
                                    Filter: [
                                        "5af0484c86f7740f02001f7f",
                                        "5e54f6af86f7742199090bf3",
                                        "5bc9be8fd4351e00334cae6e",
                                        "543be6674bdc2df1348b4569",
                                        "6389c6463485cf0eeb260715"
                                    ],
                                    ExcludedFilter: [
                                        ""
                                    ]
                                }
                            ],
                            cellsH: 14,
                            cellsV: 14,
                            minCount: 0,
                            maxCount: 0,
                            maxWeight: 0,
                            isSortingTable: false
                        },
                        _proto: "55d329c24bdc2d892f8b4567"
                    }
                ]

            }, //Overried properties basically tell the server on what data inside _props to be modified from the cloned item
            parentId: "5795f317245977243854e041", //ParentId refers to the Node item the gun will be under, you can check it in https://db.sp-tarkov.com/search
            newId: CustomItemIds.FRIDGE, 
            fleaPriceRoubles: 9800000, 
            handbookPriceRoubles: 9800000,
            handbookParentId: "5b5f6fa186f77409407a7eb7", //Handbook Parent Id refers to the category the gun will be under
            //you see those side box tab thing that only select gun under specific icon? Handbook parent can be found in Aki_Data\Server\database\templates.
            locales: {
                en: {
                    name: "Fridge RZRV-98",
                    shortName: "Fridge",
                    description: "Fridge RZRV-98, found randomly by Jaeger while mushroom hunting in the woods. It's still perfectly working... unbelievable!"
                }
            }
        };
        
        const thiccAmmoCaseItem: NewItemFromCloneDetails = {
            itemTplToClone: "5aafbde786f774389d0cbc0f", //the item we want to clone
            overrideProperties: {
                Width: 5,
                Height: 2,
                Weight: 7.3,
                BackgroundColor: "violet",
                Prefab: {
                    path: "thiccammocase.bundle",
                    rcid: ""
                },
                Grids: [
                    {
                        _name: "main",
                        _id: "thiccammocasegrid",
                        _parent: CustomItemIds.THICC_AMMO_CASE,
                        _props: {
                            filters: [
                                {
                                    Filter: [
                                        "5485a8684bdc2da71d8b4567",
                                        "543be5cb4bdc2deb348b4568"
                                    ],
                                    ExcludedFilter: [
                                        ""
                                    ]
                                }
                            ],
                            cellsH: 14,
                            cellsV: 14,
                            minCount: 0,
                            maxCount: 0,
                            maxWeight: 0,
                            isSortingTable: false
                        },
                        _proto: "55d329c24bdc2d892f8b4567"
                    }
                ]
    
            }, //Overried properties basically tell the server on what data inside _props to be modified from the cloned item
            parentId: "5795f317245977243854e041", //ParentId refers to the Node item the gun will be under, you can check it in https://db.sp-tarkov.com/search
            newId: CustomItemIds.THICC_AMMO_CASE, 
            fleaPriceRoubles: 9800000, 
            handbookPriceRoubles: 9800000,
            handbookParentId: "5b5f6fa186f77409407a7eb7", //Handbook Parent Id refers to the category the gun will be under
            //you see those side box tab thing that only select gun under specific icon? Handbook parent can be found in Aki_Data\Server\database\templates.
            locales: {
                en: {
                    name: "T H I C C Ammunition case",
                    shortName: "T H I C C Ammo",
                    description: "\"I'M OUT OF AMMO!\" words never spoken by the carrier of this mighty enlarged ammunition container."
                }
            }
        };

        const thiccGrenadeCaseItem: NewItemFromCloneDetails = {
            itemTplToClone: "5e2af55f86f7746d4159f07c", //the item we want to clone
            overrideProperties: {
                Width: 5,
                Height: 4,
                Weight: 16,
                BackgroundColor: "violet",
                Prefab: {
                    path: "thiccgrenadecase.bundle",
                    rcid: ""
                },
                Grids: [
                    {
                        _name: "main",
                        _id: "thiccgrenadecasegrid",
                        _parent: CustomItemIds.THICC_GRENADE_CASE,
                        _props: {
                            filters: [
                                {
                                    Filter: [
                                        "5e2af51086f7746d3f3c3402",
                                        "5656eb674bdc2d35148b457c",
                                        "5ede474b0c226a66f5402622",
                                        "5ede475b549eed7c6d5c18fb",
                                        "5ede4739e0350d05467f73e8",
                                        "5f0c892565703e5c461894e9",
                                        "5ede47405b097655935d7d16",
                                        "5ede475339ee016e8c534742",
                                        "5ede47641cf3836a88318df1",
                                        "543be6564bdc2df4348b4568"
                                    ],
                                    ExcludedFilter: [
                                        ""
                                    ]
                                }
                            ],
                            cellsH: 14,
                            cellsV: 14,
                            minCount: 0,
                            maxCount: 0,
                            maxWeight: 0,
                            isSortingTable: false
                        },
                        _proto: "55d329c24bdc2d892f8b4567"
                    }
                ]
    
            }, //Overried properties basically tell the server on what data inside _props to be modified from the cloned item
            parentId: "5795f317245977243854e041", //ParentId refers to the Node item the gun will be under, you can check it in https://db.sp-tarkov.com/search
            newId: CustomItemIds.THICC_GRENADE_CASE, 
            fleaPriceRoubles: 9800000, 
            handbookPriceRoubles: 9800000,
            handbookParentId: "5b5f6fa186f77409407a7eb7", //Handbook Parent Id refers to the category the gun will be under
            //you see those side box tab thing that only select gun under specific icon? Handbook parent can be found in Aki_Data\Server\database\templates.
            locales: {
                en: {
                    name: "T H I C C Grenade case",
                    shortName: "T H I C C Grenade",
                    description: "There have been rumors around Tarkov that a big explosion happened somewhere, and no one has a clue why. Apparently, one PMC went missing for weeks recently, and it's thought that he had a grenade box like this one and accidentally set off a grenade inside it."
                }
            }
        };

        const thiccMedcaseItem: NewItemFromCloneDetails = {
            itemTplToClone: "5909d4c186f7746ad34e805a", //the item we want to clone
            overrideProperties: {
                Width: 4,
                Height: 3,
                Weight: 4,
                BackgroundColor: "violet",
                Prefab: {
                    path: "thiccmedcase.bundle",
                    rcid: ""
                },
                Grids: [
                    {
                        _name: "main",
                        _id: "thiccmedcasegrid",
                        _parent: CustomItemIds.THICC_MEDCASE,
                        _props: {
                            filters: [
                                {
                                    Filter: [
                                        "543be5664bdc2dd4348b4569",
                                        "5d1b3a5d86f774252167ba22"
                                    ],
                                    ExcludedFilter: [
                                        "5448bf274bdc2dfc2f8b456a"
                                    ]
                                }
                            ],
                            cellsH: 14,
                            cellsV: 14,
                            minCount: 0,
                            maxCount: 0,
                            maxWeight: 0,
                            isSortingTable: false
                        },
                        _proto: "55d329c24bdc2d892f8b4567"
                    }
                ]
    
            }, //Overried properties basically tell the server on what data inside _props to be modified from the cloned item
            parentId: "5795f317245977243854e041", //ParentId refers to the Node item the gun will be under, you can check it in https://db.sp-tarkov.com/search
            newId: CustomItemIds.THICC_MEDCASE, 
            fleaPriceRoubles: 9800000, 
            handbookPriceRoubles: 9800000,
            handbookParentId: "5b5f6fa186f77409407a7eb7", //Handbook Parent Id refers to the category the gun will be under
            //you see those side box tab thing that only select gun under specific icon? Handbook parent can be found in Aki_Data\Server\database\templates.
            locales: {
                en: {
                    name: "T H I C C Medcase",
                    shortName: "T H I C C Medcase",
                    description: "Nobody believed Therapist when she said she could store all her stock inside one simple container. Now you know the secret."
                }
            }
        };

        const weaponRackItem: NewItemFromCloneDetails = {
            itemTplToClone: "5b6d9ce188a4501afc1b2b25", //the item we want to clone
            overrideProperties: {
                Width: 4,
                Height: 7,
                Weight: 30,
                BackgroundColor: "red",
                Prefab: {
                    path: "weaponrack.bundle",
                    rcid: ""
                },
                Grids: [
                    {
                        _name: "main",
                        _id: "weaponrackgrid",
                        _parent: CustomItemIds.WEAPON_RACK,
                        _props: {
                            filters: [
                                {
                                    Filter: [
                                        "5422acb9af1c889c16000029",
                                    ],
                                    ExcludedFilter: [
                                        "5448bf274bdc2dfc2f8b456a"
                                    ]
                                }
                            ],
                            cellsH: 14,
                            cellsV: 14,
                            minCount: 0,
                            maxCount: 0,
                            maxWeight: 0,
                            isSortingTable: false
                        },
                        _proto: "55d329c24bdc2d892f8b4567"
                    }
                ]
    
            }, //Overried properties basically tell the server on what data inside _props to be modified from the cloned item
            parentId: "5795f317245977243854e041", //ParentId refers to the Node item the gun will be under, you can check it in https://db.sp-tarkov.com/search
            newId: CustomItemIds.WEAPON_RACK, 
            fleaPriceRoubles: 9800000, 
            handbookPriceRoubles: 9800000,
            handbookParentId: "5b5f6fa186f77409407a7eb7", //Handbook Parent Id refers to the category the gun will be under
            //you see those side box tab thing that only select gun under specific icon? Handbook parent can be found in Aki_Data\Server\database\templates.
            locales: {
                en: {
                    name: "Weapon Rack",
                    shortName: "Weapon Rack",
                    description: "Every time you visited Prapor, you couldn't help but notice the weapon racks neatly arranged in his warehouse, each with a variety of weapons ready to be sold. The availability of weapons has been scarce for years now, which is why he always had a few empty racks set aside. Now, he's selling those too, offering an immense amount of space for your own weapons!"
                }
            }
        };

        const toolboxItem: NewItemFromCloneDetails = {
            itemTplToClone: "5b7c710788a4506dec015957", //the item we want to clone
            overrideProperties: {
                Width: 3,
                Height: 2,
                Weight: 3,
                BackgroundColor: "blue",
                Prefab: {
                    path: "small_toolbox.bundle",
                    rcid: ""
                },
                Grids: [
                    {
                        _name: "main",
                        _id: "toolboxgrid",
                        _parent: CustomItemIds.TOOLBOX,
                        _props: {
                            filters: [
                                {
                                    Filter: [
                                        "5448eb774bdc2d0a728b4567",
                                        "5448ecbe4bdc2d60728b4568",
                                        "5447e0e74bdc2d3c308b4567"
                                    ],
                                    ExcludedFilter: [
                                        "5448bf274bdc2dfc2f8b456a"
                                    ]
                                }
                            ],
                            cellsH: 8,
                            cellsV: 8,
                            minCount: 0,
                            maxCount: 0,
                            maxWeight: 0,
                            isSortingTable: false
                        },
                        _proto: "55d329c24bdc2d892f8b4567"
                    }
                ]
    
            }, //Overried properties basically tell the server on what data inside _props to be modified from the cloned item
            parentId: "5795f317245977243854e041", //ParentId refers to the Node item the gun will be under, you can check it in https://db.sp-tarkov.com/search
            newId: CustomItemIds.TOOLBOX, 
            fleaPriceRoubles: 240000, 
            handbookPriceRoubles: 240000,
            handbookParentId: "5b5f6fa186f77409407a7eb7", //Handbook Parent Id refers to the category the gun will be under
            //you see those side box tab thing that only select gun under specific icon? Handbook parent can be found in Aki_Data\Server\database\templates.
            locales: {
                en: {
                    name: "Toolbox",
                    shortName: "Toolbox",
                    description: "When he started his business, Skier didn't know where to put all his junk/random items. He began using this toolbox, stashing all sorts of things in it. It's always been handy for him, but now he owns massive warehouses run by hundreds of workers. You can make good use of it if you want!"
                }
            }
        };

        customItemService.createItemFromClone(weaponModsCaseItem);
        customItemService.createItemFromClone(thiccWeaponModsCaseItem);
        customItemService.createItemFromClone(equipmentCaseItem);
        customItemService.createItemFromClone(newWeaponModsCaseItem);
        customItemService.createItemFromClone(newThiccWeaponModsCaseItem);
        customItemService.createItemFromClone(equipmentCabinetItem);
        customItemService.createItemFromClone(equipmentChairItem);
        customItemService.createItemFromClone(safeMoneyContainerItem);
        customItemService.createItemFromClone(fridgeItem);
        customItemService.createItemFromClone(thiccAmmoCaseItem);
        customItemService.createItemFromClone(thiccGrenadeCaseItem);
        customItemService.createItemFromClone(thiccMedcaseItem);
        customItemService.createItemFromClone(weaponRackItem);
        customItemService.createItemFromClone(toolboxItem);

        this.addAssorts();
    }

    public postSptLoad(container: DependencyContainer): void {
        /*
        const db = container.resolve<DatabaseServer>("DatabaseServer");
        const item = db.getTables().templates.items;
        */
        const logger = container.resolve<ILogger>("WinstonLogger");
        
        logger.logWithColor("[Randomizzatore-MoreCases-1.1.0] Successfully added all cases and assorts to traders!", LogTextColor.GREEN);
    }
}

export const mod = new Mod();