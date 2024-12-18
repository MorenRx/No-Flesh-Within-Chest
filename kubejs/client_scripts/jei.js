JEIEvents.information(event => {
    for (let i in global.organCharmNbtMap) {
        $MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create(i, global.organCharmNbtMap[i].targetOrgan))
    }

    event.addItem('kubejs:candy_pancreas', Text.black(Text.translatable("kubejs.jei.candy_pancreas.1")))
    event.addItem('kubejs:fire_gem', Text.black(Text.translatable("kubejs.jei.fire_gem.1")))
    event.addItem('kubejs:magic_spine', Text.black(Text.translatable("kubejs.jei.magic_spine.1")))
    event.addItem('kubejs:magic_vision', Text.black(Text.translatable("kubejs.jei.magic_vision.1")))

    event.addItem(Ingredient.of('#kubejs:evolution'), [Text.black(Text.translatable("kubejs.jei.evolution.1"))])
    event.addItem('kubejs:lucky_cookie_organ', Text.black(Text.translatable("kubejs.jei.lucky_cookie_organ.1")))
    event.addItem('kubejs:golden_lucky_cookie_organ', Text.black(Text.translatable("kubejs.jei.golden_lucky_cookie_organ.1")))
    event.addItem('kubejs:unholy_grail', Text.black(Text.translatable("kubejs.jei.unholy_grail.1")))
    event.addItem('kubejs:aesegull_rib_left', Text.black(Text.translatable("kubejs.jei.aesegull_rib_left.1")))
    event.addItem('kubejs:aesegull_rib_right', Text.black(Text.translatable("kubejs.jei.aesegull_rib_right.1")))
    event.addItem('kubejs:mockery', Text.black(Text.translatable("kubejs.jei.mockery.1")))
    event.addItem('kubejs:sarcasm', Text.black(Text.translatable("kubejs.jei.sarcasm.1")))
    event.addItem('kubejs:cursed_soul', Text.black(Text.translatable("kubejs.jei.cursed_soul.1")))
    event.addItem('kubejs:executioner_blade_pieces', Text.black(Text.translatable("kubejs.jei.executioner_blade_pieces.1")))
    event.addItem('kubejs:love_between_lava_and_ice', Text.black(Text.translatable("kubejs.jei.love_between_lava_and_ice.1")))
    event.addItem('kubejs:forbidden_fruit', Text.black(Text.translatable("kubejs.jei.forbidden_fruit.1")))
    event.addItem('kubejs:heavy_hammer_muscle', Text.black(Text.translatable("kubejs.jei.heavy_hammer_muscle.1")))
    event.addItem('kubejs:leviathan_spine', Text.black(Text.translatable("kubejs.jei.leviathan_spine.1")))
    event.addItem('kubejs:leviathan_rib', Text.black(Text.translatable("kubejs.jei.leviathan_rib.1")))
    event.addItem('kubejs:bone_soul', Text.black(Text.translatable("kubejs.jei.bone_soul.1")))
    event.addItem('kubejs:heart_of_blade', Text.black(Text.translatable("kubejs.jei.heart_of_blade.1")))
    event.addItem('kubejs:god_bless_empty_necklace', Text.black(Text.translatable("kubejs.jei.god_bless_empty_necklace.1")))
    event.addItem('kubejs:redstone_chipset', Text.black(Text.translatable("kubejs.jei.redstone_chipset.1")))
    event.addItem('kubejs:ore_lung', Text.black(Text.translatable("kubejs.jei.ore_lung.1")))
    event.addItem('kubejs:flower_heart', Text.black(Text.translatable("kubejs.jei.flower_heart.1")))
    event.addItem('kubejs:wither_and_fall', Text.black(Text.translatable("kubejs.jei.wither_and_fall.1")))
    event.addItem('kubejs:blood_crystal', Text.black(Text.translatable("kubejs.jei.blood_crystal.1")))
    event.addItem('kubejs:melty_blood', Text.black(Text.translatable("kubejs.jei.melty_blood.1")))
    event.addItem('kubejs:demon_eyeball', Text.black(Text.translatable("kubejs.jei.demon_eyeball.1")))
    event.addItem('kubejs:parasitic_elf', Text.black(Text.translatable("kubejs.jei.parasitic_elf.1")))
    event.addItem('kubejs:diamond_bottle', Text.black(Text.translatable("kubejs.jei.diamond_bottle.1")))
    event.addItem('kubejs:blood_moon_wand', Text.black(Text.translatable("kubejs.jei.blood_moon_wand.1")))
    event.addItem('kubejs:pandora_inactive', Text.black(Text.translatable("kubejs.jei.pandora_inactive.1")))
    event.addItem('kubejs:ender_guard_eyeball', Text.black(Text.translatable("kubejs.jei.ender_guard_eyeball.1")))
    event.addItem('kubejs:netherite_muscle', Text.black(Text.translatable("kubejs.jei.netherite_muscle.1")))
    event.addItem('kubejs:harbinger_lung', Text.black(Text.translatable("kubejs.jei.harbinger_lung.1")))
    event.addItem('kubejs:ancient_chip', Text.black(Text.translatable("kubejs.jei.ancient_chip.1")))
    event.addItem('kubejs:mini_vampire', Text.black(Text.translatable("kubejs.jei.mini_vampire.1")))
    event.addItem('kubejs:ring_for_home', Text.black(Text.translatable("kubejs.jei.ring_for_home.1")))
    event.addItem('kubejs:embers_liver', Text.black(Text.translatable("kubejs.jei.embers_liver.1")))
    event.addItem('kubejs:bad_ink', Text.black(Text.translatable("kubejs.jei.bad_ink.1")))
    event.addItem('kubejs:mini_slime', Text.black(Text.translatable("kubejs.jei.mini_slime.1")))
    event.addItem('kubejs:sand_bone', Text.black(Text.translatable("kubejs.jei.sand_bone.1")))
    event.addItem('kubejs:bloody_bone_arrow', Text.black(Text.translatable("kubejs.jei.bloody_bone_arrow.1")))
    event.addItem('kubejs:vulcan_furnace', Text.black(Text.translatable("kubejs.jei.vulcan_furnace.1")))
    event.addItem('kubejs:amethyst_magic_core', Text.black(Text.translatable("kubejs.jei.amethyst_magic_core.1")))
    event.addItem('kubejs:origin_knight_core', Text.black(Text.translatable("kubejs.jei.origin_knight_core.1")))
    event.addItem('kubejs:fish_in_chest', Text.black(Text.translatable("kubejs.jei.fish_in_chest.1")))
    event.addItem('kubejs:fish_in_warp', Text.black(Text.translatable("kubejs.jei.fish_in_warp.1")))
    event.addItem('kubejs:warp_bubble', Text.black(Text.translatable("kubejs.jei.warp_bubble.1")))
    event.addItem('kubejs:broken_prismarine_crown', Text.black(Text.translatable("kubejs.jei.broken_prismarine_crown.1")))
    event.addItem('kubejs:plastic_heart', Text.black(Text.translatable("kubejs.jei.plastic_heart.1")))
    event.addItem('kubejs:chicken_flavor_powder', Text.black(Text.translatable("kubejs.jei.chicken_flavor_powder.1")))
    event.addItem('kubejs:origin_of_tumor', Text.black(Text.translatable("kubejs.jei.origin_of_tumor.1")))
    event.addItem('kubejs:immortal_volcanic_rock', Text.black(Text.translatable("kubejs.jei.immortal_volcanic_rock.1")))
    event.addItem('kubejs:frenzy_blast_furance', Text.black(Text.translatable("kubejs.jei.frenzy_blast_furance.1")))
    event.addItem('kubejs:sunbird_crystals', Text.black(Text.translatable("kubejs.jei.sunbird_crystals.1")))
    event.addItem('kubejs:enderiophage_heart', Text.black(Text.translatable("kubejs.jei.enderiophage_heart.1")))
    event.addItem('kubejs:viviparous_crinoidea', Text.black(Text.translatable("kubejs.jei.viviparous_crinoidea.1")))
    event.addItem('kubejs:whale_lung', Text.black(Text.translatable("kubejs.jei.whale_lung.1")))
    event.addItem('kubejs:egg_of_straddler', Text.black(Text.translatable("kubejs.jei.egg_of_straddler.1")))
    event.addItem('kubejs:soul_vulture_feather', Text.black(Text.translatable("kubejs.jei.soul_vulture_feather.1")))
    event.addItem('kubejs:tusk', Text.black(Text.translatable("kubejs.jei.tusk.1")))
    event.addItem('kubejs:mantis_shrimp_fist', Text.black(Text.translatable("kubejs.jei.mantis_shrimp_fist.1")))
    event.addItem('kubejs:fossil_gallbladder', Text.black(Text.translatable("kubejs.jei.fossil_gallbladder.1")))
    event.addItem('kubejs:weird_paperman', Text.black(Text.translatable("kubejs.jei.weird_paperman.1")))
    event.addItem('kubejs:treasure_detector_feather', Text.black(Text.translatable("kubejs.jei.treasure_detector_feather.1")))
    event.addItem('kubejs:potoo_beak', Text.black(Text.translatable("kubejs.jei.potoo_beak.1")))
    event.addItem('kubejs:is_rabbit', Text.black(Text.translatable("kubejs.jei.is_rabbit.1")))
    event.addItem('kubejs:blaze_pressurizer', Text.black(Text.translatable("kubejs.jei.blaze_pressurizer.1")))
})
