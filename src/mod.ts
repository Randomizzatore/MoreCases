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



class Mod implements IPostDBLoadMod, IPostSptLoadMod {
    private logger: Logger;
    private databaseServer: DatabaseServer;

    public addAssorts(): void {
        // Recupera l'assortimento del trader Mechanic
        const mechanicAssort: ITraderAssort = this.databaseServer.getTables().traders[Traders.MECHANIC].assort;
        const ragmanAssort: ITraderAssort = this.databaseServer.getTables().traders[Traders.RAGMAN].assort;
        // Nuovo oggetto da aggiungere
        const weaponModsCase: Item = {
            _id: "assort_weaponmodscase_0",
            _tpl: "WeaponModsCase", // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const weaponModsCaseBarter: Item = {
            _id: "assort_weaponmodscase_barter_0",
            _tpl: "WeaponModsCase", // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        }

        const thiccWeaponModsCase: Item = {
            _id: "assort_thiccweaponmodscase_0",
            _tpl: "ThiccWeaponModsCase", // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const thiccWeaponModsCaseBarter: Item = {
            _id: "assort_thiccweaponmodscase_barter_0",
            _tpl: "ThiccWeaponModsCase", // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const equipmentCase: Item = {
            _id: "assort_equipmentcase_0",
            _tpl: "EquipmentCase", // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        const equipmentCaseBarter: Item = {
            _id: "assort_equipmentcase_barter_0",
            _tpl: "EquipmentCase", // L'ID del template dell'oggetto che vuoi aggiungere (ad es. ID di un'arma, armatura, ecc.)
            parentId: "hideout",
            slotId: "hideout",
            upd: { StackObjectsCount: 1 } // Quantità dell'oggetto
        };

        // Prezzo dell'oggetto
        const weaponModsCasePrice: IBarterScheme = {
            count: 9800, // Prezzo in rubli, o altri tipi di valuta
            _tpl: "569668774bdc2da2298b4568" // ID della valuta (es. Rubli)
        };

        const weaponModsCaseBarterRequirements: IBarterScheme = {
            count: 3, // Numero di oggetti richiesti per il barter
            _tpl: "59faff1d86f7746c51718c9c" // Template ID del primo oggetto richiesto
        }

        const thiccWeaponModsCasePrice: IBarterScheme = {
            count: 60000, // Prezzo in rubli, o altri tipi di valuta
            _tpl: "569668774bdc2da2298b4568" // ID della valuta (es. Rubli)
        };

        const thiccWeaponModsCaseBarterRequirements: IBarterScheme = {
            count: 10, // Numero di oggetti richiesti per il barter
            _tpl: "59faff1d86f7746c51718c9c" // Template ID del primo oggetto richiesto
        }

        const equipmentCasePrice: IBarterScheme = {
            count: 6789123, // Prezzo in rubli, o altri tipi di valuta
            _tpl: "5449016a4bdc2d6f028b456f" // ID della valuta (es. Rubli)
        };

        const equipmentCaseBarterRequirements: IBarterScheme[] = [
            {
                count: 8, // Numero di oggetti richiesti per il barter
                _tpl: "60bf74184a63fc79b60c57f6" // Template ID del primo oggetto richiesto
            },
            {
                count: 8, // Numero di oggetti richiesti per il barter
                _tpl: "5bd073c986f7747f627e796c" // Template ID del primo oggetto richiesto
            },
            {
                count: 2, // Numero di oggetti richiesti per il barter
                _tpl: "5aa2b9ede5b5b000137b758b" // Template ID del primo oggetto richiesto
            },
            {
                count: 2, // Numero di oggetti richiesti per il barter
                _tpl: "59e7708286f7742cbd762753" // Template ID del primo oggetto richiesto
            }
        ]


        mechanicAssort.items.push(weaponModsCase);
        mechanicAssort.items.push(weaponModsCaseBarter);
        mechanicAssort.items.push(thiccWeaponModsCase);
        mechanicAssort.items.push(thiccWeaponModsCaseBarter);
        ragmanAssort.items.push(equipmentCase);
        ragmanAssort.items.push(equipmentCaseBarter);

        mechanicAssort.barter_scheme[weaponModsCase._id] = [[weaponModsCasePrice]];
        mechanicAssort.barter_scheme[weaponModsCaseBarter._id] = [[weaponModsCaseBarterRequirements]];
        mechanicAssort.barter_scheme[thiccWeaponModsCase._id] = [[thiccWeaponModsCasePrice]];
        mechanicAssort.barter_scheme[thiccWeaponModsCaseBarter._id] = [[thiccWeaponModsCaseBarterRequirements]];
        ragmanAssort.barter_scheme[equipmentCase._id] = [[equipmentCasePrice]];
        ragmanAssort.barter_scheme[equipmentCaseBarter._id] = [equipmentCaseBarterRequirements];

        // Livello di lealtà richiesto
        mechanicAssort.loyal_level_items[weaponModsCase._id] = 2;
        mechanicAssort.loyal_level_items[weaponModsCaseBarter._id] = 2;
        mechanicAssort.loyal_level_items[thiccWeaponModsCase._id] = 4;
        mechanicAssort.loyal_level_items[thiccWeaponModsCaseBarter._id] = 3;
        ragmanAssort.loyal_level_items[equipmentCase._id] = 3;
        ragmanAssort.loyal_level_items[equipmentCaseBarter._id] = 2;

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
                    path: "assets/content/items/spec/item_spec_minedetector.bundle",
                    rcid: ""
                },
                Grids: [
                    {
                        _name: "main",
                        _id: "weaponmodscasegrid",
                        _parent: "WeaponModsCase",
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
            newId: "WeaponModsCase", //The new id of our cloned item
            fleaPriceRoubles: 1000000, //Self explanatary
            handbookPriceRoubles: 1000000,
            handbookParentId: "5b5f6fa186f77409407a7eb7", //Handbook Parent Id refers to the category the gun will be under
            //you see those side box tab thing that only select gun under specific icon? Handbook parent can be found in Aki_Data\Server\database\templates.
            locales: {
                en: {
                    name: "Weapon Modifications case",
                    shortName: "Mods Case",
                    description: "A case specifically designed to contain weapon modifications."
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
                        _parent: "WeaponModsCase",
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
            newId: "ThiccWeaponModsCase", //The new id of our cloned item
            fleaPriceRoubles: 9809800, //Self explanatary
            handbookPriceRoubles: 9809800,
            handbookParentId: "5b5f6fa186f77409407a7eb7", //Handbook Parent Id refers to the category the gun will be under
            //you see those side box tab thing that only select gun under specific icon? Handbook parent can be found in Aki_Data\Server\database\templates.
            locales: {
                en: {
                    name: "T H I C C Weapon Modifications case",
                    shortName: "T H I C C Mods Case",
                    description: "A case specifically designed to contain weapon modifications.\nBut now it's THICC!"
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
                        _parent: "EquipmentCase",
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
            newId: "EquipmentCase", //The new id of our cloned item
            fleaPriceRoubles: 6789123, //Self explanatary
            handbookPriceRoubles: 6789123,
            handbookParentId: "5b5f6fa186f77409407a7eb7", //Handbook Parent Id refers to the category the gun will be under
            //you see those side box tab thing that only select gun under specific icon? Handbook parent can be found in Aki_Data\Server\database\templates.
            locales: {
                en: {
                    name: "Equipment Case",
                    shortName: "Equipment Case",
                    description: "A case specifically designed to contain equipment for your PMC."
                }
            }
        };
        customItemService.createItemFromClone(weaponModsCaseItem);
        customItemService.createItemFromClone(thiccWeaponModsCaseItem);
        customItemService.createItemFromClone(equipmentCaseItem);

        this.addAssorts();
    }

    //Check if our item is in the server or not
    public postSptLoad(container: DependencyContainer): void {
        /*
        const db = container.resolve<DatabaseServer>("DatabaseServer");
        const item = db.getTables().templates.items;
        */
        console.log("[Randomizzatore-MoreCases] Successfully added cases and offers to traders!");

    }
}

export const mod = new Mod();
