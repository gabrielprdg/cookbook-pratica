"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmRecipe = void 0;
const typeorm_1 = require("typeorm");
const typeorm_image_1 = require("./typeorm-image");
let TypeOrmRecipe = class TypeOrmRecipe {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TypeOrmRecipe.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TypeOrmRecipe.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TypeOrmRecipe.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TypeOrmRecipe.prototype, "assemblyIngradients", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TypeOrmRecipe.prototype, "operatingInstructions", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TypeOrmRecipe.prototype, "entryTemperature", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => typeorm_image_1.TypeOrmImage),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeorm_image_1.TypeOrmImage)
], TypeOrmRecipe.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TypeOrmRecipe.prototype, "created_at", void 0);
TypeOrmRecipe = __decorate([
    (0, typeorm_1.Entity)('recipe')
], TypeOrmRecipe);
exports.TypeOrmRecipe = TypeOrmRecipe;
//# sourceMappingURL=typeorm-recipe.js.map