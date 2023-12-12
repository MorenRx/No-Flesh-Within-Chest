# 当前已知问题 - Know Issue

> 下文仅提供中文文案用于开发团队进行问题同步。问题记录在问题发现的版本下，如若修复使用二级列表标注修复情况和方法。问题通过P0~P3等级标注优先级。

## 版本 Beta 0.0.1

> 内部发布时间：2023.12.09

 - **P2**：锦致装饰（Supplementaries）在网络较差环境下获取Contributor名单会影响启动时长（21s -> 44s），~~考虑使用Opotato 1.19.2禁用其网络请求~~。经过确认，目前Opotato 1.19.2功能有限，1.19.2版本基本无旧版本的作用，因此考虑到该情况出现的概率不高且影响可以接受，暂不考虑修复。后续可以采用独立编译的锦致装饰版本来解决网络请求问题。
 
    - 该问题目前已修复，包括锦致装饰和Citadel的网络请求问题，分别取消了网络的请求和指向了本地资源。启动时间恢复至~23s。<u>但在Curseforge发布时需要替换为原Mod</u>，在国内发布时可以在懒人包中打包该Mod以提高国内网络环境中的启动效率。

 - **P1**：胶囊（Capsule）在预览液体建筑模板时会导致客户端崩溃，目前已禁用原版流体在模板中的使用，但未加入其余流体的禁用。

 - **P3**：非正常情况下，如果使用非开胸器方法打开胸腔并修改其中器官属性会导致通过Kubejs实现的自定义属性功能失效。

 - **P2**：凋零风暴潜在的服务器性能问题，如使用恐怖炸弹时对服务器性能的影响。