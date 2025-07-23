---
title: "Glossary"
description: "Definitions of technical terms and abbreviations used in the Volt Typhoon report"
lang: "en"
permalink: "/en/glossary/index.html"
layout: "base.njk"
---

# Glossary of Terms

- **Advanced Persistent Threat (APT):** A stealthy, sustained cyber attack campaign often orchestrated by a nation-state or organized group. “Advanced” refers to the use of sophisticated techniques and malware, “Persistent” indicates the intruders’ long-term presence in the target network, and “Threat” points to the intent to steal, surveil, or disrupt. APTs typically infiltrate a network and remain undetected for extended periods while harvesting data or positioning for sabotage.

- **Command and Control (C2):** The communication channel that attackers use to **remotely control compromised systems**. After infecting a machine, attackers will establish a C2 server to send commands (like uploading files, executing programs) and receive stolen data. In Volt Typhoon’s case, the C2 infrastructure often consists of proxy servers (like hacked routers) that hide the real origin of the commands.

- **Critical Infrastructure:** The essential systems and assets that are vital to a nation’s security, economy, and public health. Examples include the power grid, water treatment facilities, transportation networks, telecommunications systems, and financial services. Disruption of critical infrastructure can have widespread and severe effects, which is why such targets are often the focus of state-sponsored attacks.

- **Exfiltration:** The unauthorized transfer of data from a compromised system to an external location controlled by the attacker. In simpler terms, exfiltration is **data theft** – attackers quietly gathering sensitive files (documents, databases, credentials) and sending them out of the victim’s network. Volt Typhoon stages collected data into archive files for exfiltration back to their servers [oai_citation:79‡microsoft.com](https://www.microsoft.com/en-us/security/blog/2023/05/24/volt-typhoon-targets-us-critical-infrastructure-with-living-off-the-land-techniques/#:~:text=To%20achieve%20their%20objective%2C%20the,also%20been%20observed%20using%20custom).

- **Indicator of Compromise (IoC):** Forensic evidence or clues that indicate a network **may have been breached**. IoCs can be technical artifacts like suspicious IP addresses contacting your systems, known malicious file hashes found on a computer, unusual processes running, or anomalous login patterns. They serve as warning flags for incident responders. For example, detection of an IoC associated with Volt Typhoon (such as a specific IP or filename) should trigger a deeper investigation into potential compromise.

- **Lateral Movement:** A technique whereby an attacker who has gained initial access to one system in a network **moves to other systems** to expand their control. This often involves using stolen credentials or exploiting trust relationships to hop from the initially compromised machine to file servers, databases, domain controllers, etc. Lateral movement allows attackers like Volt Typhoon to find more valuable data and establish broader persistence within a victim’s network.

- **Living off the Land (LotL):** A strategy of using the target system’s **own legitimate tools** and software to conduct malicious activities. Instead of deploying custom malware, attackers leverage built-in utilities (e.g. PowerShell, Windows command prompt, WMI) and standard network protocols. By “living off the land,” the operation blends in with normal system administration, making detection much harder [oai_citation:80‡cyber.gov.au](https://www.cyber.gov.au/about-us/view-all-content/alerts-and-advisories/prc-state-sponsored-cyber-activity_actions-for-critical-infrastructure-leaders#:~:text=PRC%20State,described%20in%20these%20joint%20products). Volt Typhoon heavily employs LotL techniques, which means security software may not flag their actions as malicious since common tools are being used.

- **LOLBins:** Short for “**Living-off-the-land binaries**,” this term refers to legitimate executable files or scripts that are pre-installed on operating systems which attackers abuse for malicious purposes. Examples include `PowerShell.exe`, `cmd.exe`, `wscript.exe`, or `ntdsutil.exe`. These binaries are not malware themselves but can be scripted by attackers to perform harmful actions under the guise of normal operations. Volt Typhoon’s tactics include using LOLBins to avoid running any foreign programs on the victim system.

- **Persistence:** In cybersecurity, persistence refers to an attacker’s ability to **maintain a long-term foothold** in a compromised network. Techniques for persistence include creating hidden user accounts, establishing backdoor access points, or using scheduled tasks that re-establish access even after reboots. Volt Typhoon uses stolen valid credentials and other tricks to ensure they can come back into a network at will, even if some of their access points are discovered and removed [oai_citation:81‡microsoft.com](https://www.microsoft.com/en-us/security/blog/2023/05/24/volt-typhoon-targets-us-critical-infrastructure-with-living-off-the-land-techniques/#:~:text=To%20achieve%20their%20objective%2C%20the,also%20been%20observed%20using%20custom).
