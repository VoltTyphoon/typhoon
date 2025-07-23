---
title: "术语表"
description: "Volt Typhoon 报告中使用的技术术语和缩略语定义"
lang: "zh"
permalink: "/zh/glossary/index.html"
layout: "base.njk"
---

# 术语表

- **高级持续性威胁 (APT)：** 指由国家或组织支持的高水平黑客行为，特点是攻击者具有**高级**技术手段，能够**持续**长期潜伏在目标网络中，并具备明确的**威胁**意图（如窃密或破坏）。APT通常通过定制工具和零日漏洞进行初始渗透，在网络内保持隐蔽，实现长时间的情报收集或潜伏等待攻击时机。

- **指挥与控制 (C2)：** 又称命令控制，是攻击者**远程操纵**受感染系统的通信机制。黑客入侵设备后，会让该设备与一个C2服务器通信，从而接收攻击者的指令（如窃取文件、执行恶意操作）并向攻击者发送窃取的数据。Volt Typhoon的指挥控制基础设施往往由被攻陷的第三方路由器等代理组成，用于隐藏其真正的控制服务器。

- **关键基础设施：** 对国家安全、社会经济和公众健康至关重要的基础服务和设施。例如电网、电信网络、交通运输系统、水利设施、金融系统等都属于关键基础设施。一旦这些设施被网络攻击破坏，可能导致大范围停电、中断通信、供应链混乱等严重后果。因此国家支持的黑客常将其作为目标，以获取战略优势或威慑能力。

- **数据渗漏 (Exfiltration)：** 未经授权将数据从受保护的内部网络**秘密传输出去**的行为，也称为数据外泄。在黑客入侵后，往往会搜集敏感信息（如机密文件、用户资料等），然后通过网络将这些数据发送到攻击者控制的服务器。这一过程就是数据渗漏。例如Volt Typhoon会将收集的数据打包加密后，通过隐蔽的渠道渗漏出受害网络 [oai_citation:162‡microsoft.com](https://www.microsoft.com/en-us/security/blog/2023/05/24/volt-typhoon-targets-us-critical-infrastructure-with-living-off-the-land-techniques/#:~:text=To%20achieve%20their%20objective%2C%20the,also%20been%20observed%20using%20custom)。

- **入侵指标 (IoC)：** 表明系统或网络**可能已遭入侵**的各种迹象或证据。IoC可以是技术层面的“线索”，比如不寻常的网络连接、已知恶意软件的哈希值、非法开启的端口、异常的账户活动等。这些指标帮助安全团队发现黑客活动的踪迹。例如，发现网络中与Volt Typhoon关联的IoC（如特定IP或文件哈希） [oai_citation:163‡socradar.io](https://socradar.io/apt-profile-volt-typhoon/#:~:text=IoCs%20Related%20to%20Volt%20Typhoon)，意味着需要进一步调查是否受到该组织攻击。

- **横向移动：** 攻击者在攻陷网络中一个初始节点后，**扩展到其他系统**的技术手段。通过横向移动，黑客可以逐步提高权限并控制整个网络。例如，他们可能利用在一台电脑上窃得的凭据去登录同一网络内的另一台服务器，反复这一过程就能从一台普通员工电脑移动到关键服务器。对于Volt Typhoon而言，横向移动让他们能在进入一个单位网络后，探索并控制更重要的系统和数据。

- **就地取材 (LotL)：** 一种攻击策略，**利用目标系统本身的合法工具**来执行恶意操作，而不下载明显的恶意程序。通过“就地取材”，黑客的行为看起来就像管理员日常操作，很难被察觉。这类技术也叫“无文件”攻击，因为没有引入新的恶意文件。Volt Typhoon大量使用LotL技巧，借助Windows自带功能完成信息搜集、账户窃取和数据传输等 [oai_citation:164‡cyber.gov.au](https://www.cyber.gov.au/about-us/view-all-content/alerts-and-advisories/prc-state-sponsored-cyber-activity_actions-for-critical-infrastructure-leaders#:~:text=PRC%20State,described%20in%20these%20joint%20products)。

- **LOLBins：** “**Living off the Land Binaries**”的缩写，指被攻击者滥用于恶意目的的**系统自带程序**或脚本。这些程序本身是合法的系统组件，但黑客利用它们执行攻击步骤。例如PowerShell、cmd、wscript等都是常见LOLBins。通过LOLBins，像Volt Typhoon这样的攻击者无需额外的恶意程序，就能在系统内开展横向移动、数据窃取等活动，从而降低被安全软件拦截的概率。

- **持久性 (Persistence)：** 指攻击者在目标系统中**保持长期访问**的一系列能力。获得初始访问后，黑客会采取措施保证即使一段时间潜伏不动，他们对系统的控制也不会丢失。方法包括创建隐藏账户、植入后门服务、修改启动项等。通过持续性，Volt Typhoon能够在受害网络中建立“据点”，即使管理员发现并移除了部分恶意痕迹，他们也可能通过其他隐蔽途径重新获得访问 [oai_citation:165‡microsoft.com](https://www.microsoft.com/en-us/security/blog/2023/05/24/volt-typhoon-targets-us-critical-infrastructure-with-living-off-the-land-techniques/#:~:text=To%20achieve%20their%20objective%2C%20the,also%20been%20observed%20using%20custom)。
