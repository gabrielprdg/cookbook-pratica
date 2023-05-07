"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mapper = void 0;
class Mapper {
    static toDomainEntity(typeOrmRecipe) {
        const domain = {
            id: typeOrmRecipe.id,
            name: typeOrmRecipe.name,
            weight: typeOrmRecipe.weight,
            assemblyIngradients: typeOrmRecipe.assemblyIngradients,
            operatingInstructions: typeOrmRecipe.operatingInstructions,
            image: typeOrmRecipe.image,
            entryTemperature: typeOrmRecipe.entryTemperature
        };
        return domain;
    }
    static toDomainEntities(typeOrmRecipe) {
        return typeOrmRecipe.map(typeOrmRecipe => this.toDomainEntity(typeOrmRecipe));
    }
}
exports.Mapper = Mapper;
//# sourceMappingURL=recipe-mapper.js.map