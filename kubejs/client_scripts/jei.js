JEIEvents.information(event => {
    event.addItem('kubejs:candy_pancreas', Text.black('在与无名巫师的战斗中有20%概率掉落'))
    event.addItem('kubejs:fire_gem', Text.black('击败烈焰狂战士后80%概率掉落，可以用于制作各种烈焰相关的器官'))
    event.addItem('kubejs:magic_spine', Text.black('2%的概率在击败女巫后掉落'))
    event.addItem('kubejs:magic_vision', Text.black('在与水人的战斗中有20%的概率掉落'))
    
    event.addItem(Ingredient.of('#kubejs:evolution'), [Text.black('所有被标记'), Text.green('进化'), Text.black('的器官，可以在未来的路途中通过各种方式进行进化。\n一部分可以通过'), Text.darkPurple('器官护符'), Text.black('在某些特定条件下进化。\n一部分则是可以通过各种各样的配方进行强化。\n更有一部分，只有在装备它的情况下，击杀Boss才能够得到额外的掉落物。')])
    event.addItem('kubejs:magic_vision', Text.black('在与水人的战斗中有20%的概率掉落'))
    event.addItem('kubejs:lucky_cookie_organ', Text.black('食用幸运饼干时有3%概率获得'))
    event.addItem('kubejs:unholy_grail', Text.black('你可以在古代城市的箱子中寻找到它'))
    event.addItem('kubejs:aesegull_rib_left', Text.black('立场欺诈者的左肋骨，可以在立场欺诈者的胸腔中获得'))
    event.addItem('kubejs:aesegull_rib_right', Text.black('立场欺诈者的右肋骨，可以在立场欺诈者的胸腔中获得'))
    event.addItem('kubejs:executioner_blade_pieces', Text.black('行刑者剑刃碎片可以在末影军械的胸腔中获得'))
    event.addItem('kubejs:love_between_lava_and_ice', Text.black('熔岩与蓝冰之爱可以在霜冻岩浆怪的胸腔中获得'))
    event.addItem('kubejs:forbidden_fruit', Text.black('禁忌之果可以在骷髅恶魔的胸腔中获得'))
    event.addItem('kubejs:heavy_hammer_muscle', Text.black('重锤肌肉可以在石守卫的胸腔中获得'))
    event.addItem('kubejs:leviathan_spine', Text.black('利维亚桑的脊椎可以在利维亚桑的胸腔中获得'))
    event.addItem('kubejs:leviathan_rib', Text.black('利维亚桑的肋骨可以在利维亚桑的胸腔中获得'))
    event.addItem('kubejs:bone_soul', Text.black('骨剑顽魂可以在独眼骷髅的胸腔中获得'))
    event.addItem('kubejs:heart_of_blade', Text.black('剑之心可以在冷血杀手的胸腔中获得'))
    event.addItem('kubejs:god_bless_empty_necklace', Text.black('神恩项链掉落于常规维度地牢的高级战利品宝箱中'))
    event.addItem('kubejs:redstone_chipset', Text.black('红石芯片可以在电子脉冲头的胸腔中获得'))
})