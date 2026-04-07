# 🤖🧠 Robotics + AGI Research Roadmap
### Goal: Embodied AI Researcher / AGI Systems Engineer
### Study After: 360-Day ML Roadmap + 230-Day Hardware/OS Roadmap + 320-Day CUDA/Robotics Roadmap
### Daily Commitment: 3–4 hours/day

> ⭐ = Connects to previous roadmaps
> 🔥 = Critical concept — must master deeply
> 🛠️ = Project day
> 🔁 = Revision day
> 🧠 = AGI / Cognitive Science specific
> 🤖 = Robotics specific
> 📄 = Must implement from paper

---

## 📌 OVERVIEW

| Phase | Topic | Days |
|---|---|---|
| 1 | Neuroscience + Cognitive Foundations 🧠 | 1–25 |
| 2 | Computational Theories of Intelligence 🧠 | 26–45 |
| 3 | World Models Deep 🔥 | 46–70 |
| 4 | Foundation Model Policies (VLA) ⭐🔥 | 71–95 |
| 5 | Embodied AI Research Frontier ⭐🔥 | 96–120 |
| 6 | Advanced Robot Learning 🤖🔥 | 121–150 |
| 7 | AGI Architecture Research 🧠🔥 | 151–175 |
| 8 | Sim-to-Real + Scaling Robot Data 🤖🔥 | 176–195 |
| 9 | Original Research + Paper Implementation 🔥 | 196–220 |
| 10 | Capstone Projects + Publishing | 221–240 |

**Total: 240 days**

---
---

# 🧠 PHASE 1 — NEUROSCIENCE + COGNITIVE FOUNDATIONS (Day 1–25)
### 🎯 Goal: Understand HOW biological intelligence works — this is where all AGI ideas come from

---

### 📅 Day 1–3 — Mathematical Neuroscience 🔥🧠
- **Book: "Theoretical Neuroscience" — Dayan & Abbott (Ch 1–4)**
- Neural coding — rate coding vs temporal coding
- Tuning curves — how neurons represent information
- Spike trains + Poisson processes
- Receptive fields 🔥🧠
- Population coding — distributed representations
- Why this maps directly to how neural networks represent data ⭐

### 📅 Day 4–5 — Neural Circuits + Plasticity 🔥🧠
- **"Theoretical Neuroscience" — Ch 8–10**
- Hebbian learning — "neurons that fire together wire together" 🔥🧠
- Spike-timing dependent plasticity (STDP) 🔥🧠
- Long-term potentiation (LTP) + depression (LTD)
- How plasticity = learning in biological systems
- Connection to backpropagation + gradient descent ⭐🧠

### 📅 Day 6–8 — The Brain as an Action Machine 🔥🧠
- **Book: "The Brain from Inside Out" — György Buzsáki (full)**
- The brain is NOT stimulus-response — it is action-oriented 🔥🧠
- Inside-out vs outside-in view of cognition
- Neural oscillations — theta, gamma, sharp-wave ripples
- Hippocampus — memory, navigation, planning 🔥🧠
- Why embodiment is not optional for intelligence ⭐🤖🧠

### 📅 Day 9–11 — Predictive Processing Theory 🔥🧠
- **Book: "Surfing Uncertainty" — Andy Clark (full)**
- Predictive coding — the brain as a prediction machine 🔥🧠
- Hierarchical generative models in the brain
- Prediction errors as the learning signal 🔥🧠
- Active inference — acting to confirm predictions 🔥🧠
- How this maps to world models in ML ⭐🧠
- Karl Friston's Free Energy Principle (intro)

### 📅 Day 12–13 — Free Energy Principle 🔥🧠
- **Paper: "The free-energy principle: a unified brain theory?" — Friston 2010**
- **Paper: "Active inference and epistemic value" — Friston et al.**
- Variational free energy as a unified objective 🔥🧠
- Perception as inference
- Action as inference
- How FEP unifies perception, action, attention, learning 🔥🧠
- Comparison with RL — reward vs free energy minimization

### 📅 Day 14–16 — Embodied Cognition 🔥🧠🤖
- **Book: "The Embodied Mind" — Varela, Thompson, Rosch (full)**
- Cognition IS embodied — cannot be separated from a body 🔥🧠🤖
- Enactivism — cognition as sensorimotor interaction 🔥🧠
- Why disembodied AI (LLMs alone) cannot achieve general intelligence 🧠
- Affordances — Gibson's theory 🔥🤖🧠
- How affordances connect to robot action selection ⭐🤖
- Embodied simulation hypothesis

### 📅 Day 17–19 — Computational Theory of Mind 🔥🧠
- **Book: "How the Mind Works" — Steven Pinker (full)**
- Computational theory of mind (CTM) 🔥🧠
- Modularity of mind — Fodor
- Visual perception as computation
- Reasoning, planning, decision-making as computation
- Language + thought relationship
- Critique: what CTM gets wrong about intelligence 🧠

### 📅 Day 20–22 — Memory + Planning + Imagination 🔥🧠
- **Paper: "Neuroscience-Inspired Artificial Intelligence" — Hassabis et al. 2017**
- Episodic memory — HBM (Hippocampal-Based Memory) 🔥🧠
- Mental simulation / imagination 🔥🧠
- Prospective memory — imagining future states
- How imagination connects to model-based planning ⭐🧠
- Hippocampus → Transformer architecture parallels 🔥🧠
- Sleep + memory consolidation → offline RL parallels ⭐

### 📅 Day 23–24 — What is Intelligence? 🔥🧠
- **Paper: "Building Machines That Learn and Think Like People" — Lake et al. 2017** 🔥
- What children can do that ML systems still cannot 🔥🧠
- Intuitive physics — core knowledge 🔥🧠
- Intuitive psychology — theory of mind 🔥🧠
- Compositional representations 🔥🧠
- Learning-to-learn (meta-learning) 🔥🧠
- Causal reasoning 🔥🧠
- The 9 gaps between current ML and human intelligence

### 📅 Day 25 🔁 — REVISION + REFLECTION

### 🛠️ PROJECT 1: Write Your AGI Thesis (5–10 pages)
- What is intelligence — your working definition
- What is missing from current AI systems
- Why embodiment matters
- Your hypothesis for what the path to AGI looks like
- Update this document throughout the roadmap
- This becomes part of your research identity

---
---

# 🧠 PHASE 2 — COMPUTATIONAL THEORIES OF INTELLIGENCE (Day 26–45)
### 🎯 Goal: Understand every major theory of how to build general intelligence

---

### 📅 Day 26–27 — LeCun's World Model Architecture 🔥🧠
- **Paper: "A Path Towards Autonomous Machine Intelligence" — LeCun 2022** 🔥
- Joint Embedding Predictive Architecture (JEPA) 🔥🧠
- Energy-based models as the foundation
- The 6 modules: perception, world model, cost, actor, short-term memory, configurator
- Why LeCun rejects generative models + RL for AGI
- Where you agree and disagree — form your own view 🧠

### 📅 Day 28–29 — Reward is Enough Hypothesis 🧠
- **Paper: "Reward is Enough" — Silver, Singh, Precup, Sutton 2021**
- Thesis: reward maximization is sufficient for all intelligent behavior 🧠
- Critique: what does "sufficient" actually mean?
- **Paper: "Reward is not Enough" — Sejnowski 2022** — the rebuttal
- **Paper: "On the Opportunistic Use of Language" — Marcus 2022**
- Form your own position on this debate 🧠

### 📅 Day 30–31 — Scaling Hypothesis 🔥🧠
- **Post: "The Scaling Hypothesis" — Gwern**
- **Paper: "Scaling Laws for Neural Language Models" — Kaplan et al. 2020**
- **Paper: "Emergent Abilities of Large Language Models" — Wei et al. 2022**
- Do capabilities emerge from scale? 🔥🧠
- Evidence for + against
- **Paper: "Are Emergent Abilities of Large Language Models a Mirage?" — Schaeffer et al. 2023**
- What scaling cannot give you 🧠

### 📅 Day 32–33 — Causality + Reasoning 🔥🧠
- **Book: "The Book of Why" — Judea Pearl (Ch 1–5)**
- Ladder of causation: association → intervention → counterfactuals 🔥🧠
- Structural Causal Models (SCM)
- Why correlation is not causation in AI systems 🔥🧠
- **Paper: "Toward Causal Representation Learning" — Schölkopf et al. 2021**
- Why causal reasoning is needed for AGI 🧠

### 📅 Day 34–35 — Compositionality + Systematic Generalization 🔥🧠
- **Paper: "SCAN: Learning to Compose Commands" — Lake & Baroni 2018**
- Systematic generalization — combining known concepts in new ways 🔥🧠
- Compositional representations 🔥🧠
- **Paper: "Compositional Generalization in Grounded Language Learning"**
- Why current transformers fail at systematic generalization 🧠
- Connection to language-guided robot control ⭐🤖

### 📅 Day 36–37 — Memory + Knowledge Representation 🔥🧠
- **Paper: "Neural Episodic Control" — Pritzel et al. 2017**
- **Paper: "Differentiable Neural Computer" — Graves et al. 2016** 🔥🧠
- External memory for neural networks 🔥🧠
- Key-value memory — connection to attention ⭐🧠
- Episodic vs semantic memory in AI 🔥🧠
- Memory augmented neural networks and their limits

### 📅 Day 38–39 — Kolmogorov Complexity + Intelligence 🧠
- **Book: "An Introduction to Kolmogorov Complexity" — Li & Vitanyi (Ch 1–3)**
- Algorithmic information theory 🧠
- Intelligence as compression 🔥🧠
- Minimum description length principle
- Solomonoff induction — the theoretical ideal learner
- Why this matters for thinking about generalization 🧠

### 📅 Day 40–41 — Consciousness + Self-Models 🧠
- **Paper: "Attention Schema Theory" — Graziano 2013** (summary)
- Global Workspace Theory — Baars + Dehaene 🧠
- **Paper: "Consciousness and the Brain" — Dehaene (key chapters)**
- Integrated Information Theory (IIT) — Tononi (intro)
- Not to believe any one theory — to understand the landscape 🧠
- Why self-models may be important for robust agency

### 📅 Day 42–43 — Intelligence Without Biology 🧠
- **Paper: "Kolmogorov Complexity and Algorithmic Randomness" — key sections**
- AIXI — the mathematical definition of a perfect agent 🔥🧠
- Why AIXI is incomputable — and what that means
- Gödel machines
- Marcus Hutter's research program
- Practical approximations of optimal intelligence 🧠

### 📅 Day 44 — Synthesis: Your Theory of Intelligence 🧠
- After reading all theories, write a 3-page synthesis
- What do you believe are the necessary ingredients for AGI?
- Embodiment — yes or no, and why?
- Scaling — sufficient or necessary but not sufficient?
- What experiments would test your theory?

### 📅 Day 45 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 2: Intelligence Benchmark Design
- Design 10 tasks that test genuine general intelligence
- Each task should require: compositionality, causal reasoning, memory, physical intuition
- Implement 3 of them as Python environments ⭐
- Document what current SOTA systems fail at
- This becomes the basis for your research evaluations

---
---

# 🌍 PHASE 3 — WORLD MODELS DEEP (Day 46–70)
### 🎯 Goal: Master world models — the core architecture for embodied AGI

---

### 📅 Day 46–47 — World Models Survey 🔥🧠
- **Paper: "World Models" — Ha & Schmidhuber 2018** 🔥📄
- VAE for visual encoding
- MDN-RNN for temporal prediction
- Controller trained in imagined rollouts
- Implement the full World Models architecture from scratch 📄
- Test on CarRacing-v2

### 📅 Day 48–50 — DreamerV1 → V2 → V3 🔥🎮📄
- **Paper: "Dream to Control: Learning Behaviors by Latent Imagination" — Hafner et al. 2020** 🔥
- RSSM (Recurrent State Space Model) 🔥 — implement from scratch 📄
- Latent dynamics model
- Actor-critic in latent space 🔥
- **Paper: "Mastering Atari with Discrete World Models" — DreamerV2**
- Straight-through gradients for discrete latents 🔥
- **Paper: "Mastering Diverse Domains through World Models" — DreamerV3 2023** ⭐🔥
- Free bits, symlog predictions 🔥
- One agent — 7 different domains — implement + run 📄

### 📅 Day 51–52 — RSSM Implementation Deep 🔥🎮📄
- Implement RSSM from scratch in PyTorch ⭐
- Recurrent + stochastic state
- KL balancing 🔥
- World model training loop
- Imagination rollouts
- Profile + optimize with CUDA ⭐🎮
- Test on robot simulation environment ⭐🤖

### 📅 Day 53–54 — TD-MPC + Model Predictive Control 🔥🤖📄
- **Paper: "Temporal Difference Learning for Model Predictive Control" — Hansen et al. 2022**
- TD-MPC — combining world models + MPC 🔥🤖
- MPPI (Model Predictive Path Integral) planning 🔥🤖
- **Paper: "TD-MPC2: Scalable, Robust World Models for Continuous Control" — 2023** ⭐
- Implement TD-MPC2 from scratch 📄
- Apply to robot manipulation task ⭐🤖

### 📅 Day 55–56 — JEPA (Joint Embedding Predictive Architecture) 🔥🧠📄
- **Paper: "Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture" — Assran et al. 2023** 🔥
- I-JEPA — image JEPA
- V-JEPA — video JEPA ⭐🔥
- Predicting in representation space, not pixel space 🔥🧠
- Why this may be more efficient than generative models 🧠
- Implement I-JEPA training loop 📄

### 📅 Day 57–58 — Generative World Models 🔥🧠
- **Paper: "Genie: Generative Interactive Environments" — Bruce et al. 2024** ⭐
- **Paper: "GameNGen: Diffusion World Model for Game Simulation" — 2024** ⭐
- **Paper: "DIAMOND: Diffusion for World Modeling" — 2024** ⭐
- Video diffusion as world model 🔥
- Controllable generation for planning
- Limitations vs learned dynamics models

### 📅 Day 59–60 — Neural Radiance Fields as World Models 🔥🤖
- **Paper: "NeRF: Representing Scenes as Neural Radiance Fields" — original** 🔥
- **Paper: "Instant Neural Graphics Primitives" — Müller et al. 2022** ⭐
- 3D Gaussian Splatting as real-time scene model ⭐🤖
- **Paper: "Gaussian Splatting for Real-Time Novel View Synthesis" — 2023** ⭐
- Using 3DGS as a world model for robot planning 🔥🤖
- Implement a simple NeRF from scratch 📄

### 📅 Day 61–62 — Occupancy + Implicit Representations 🔥🤖
- **Paper: "UniSim: Learning Interactive Real-World Simulators" — 2023** ⭐
- **Paper: "OccWorld: 3D Occupancy World Model" — 2023** ⭐
- Occupancy flow prediction 🔥🤖
- 4D occupancy world models
- Connection to autonomous driving + robot navigation ⭐🤖

### 📅 Day 63–65 — Scaling World Models 🔥🧠
- **Paper: "SWIM: Scalable World Models with Neural Episodic Memories" — 2024** ⭐
- **Paper: "GROOT: Learning to Follow Instructions by Watching Gameplay Videos"** ⭐
- What happens when world models scale? 🔥🧠
- Data requirements for world model training
- Compute scaling laws for world models
- Emergent planning from scale? 🧠

### 📅 Day 66–67 — World Models + Language 🔥🧠🤖
- **Paper: "Language Models as Zero-Shot Planners" — Huang et al. 2022** 🔥
- LLMs as approximate world models 🔥🧠
- Limitations of language-only world models 🧠
- Combining explicit world models + LLM reasoning ⭐🤖
- **Paper: "SayCan: Do As I Can, Not As I Say" — Ahn et al. 2022** 🔥🤖
- Affordance functions grounding language in robot capability ⭐🤖

### 📅 Day 68–69 — World Model Evaluation 🔥
- How to evaluate world model quality
- Prediction accuracy vs downstream task performance
- PSNR, SSIM — why they are not enough 🔥
- FVD (Fréchet Video Distance)
- Planning quality metrics
- Build your own world model evaluation suite 📄

### 📅 Day 70 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 3: DreamerV3 for Robot Manipulation 📄🤖🎮
- Implement DreamerV3 from scratch in PyTorch ⭐
- Train on robot manipulation in Isaac Lab / MuJoCo ⭐🤖
- Custom CUDA kernels for RSSM speed ⭐🎮
- Compare: DreamerV3 vs TD-MPC2 on same task
- Imagination rollout visualization
- Full wandb experiment tracking ⭐
- Write a technical report

---
---

# 🦾 PHASE 4 — FOUNDATION MODEL POLICIES (VLA) (Day 71–95)
### 🎯 Goal: Understand + implement the current frontier of robot learning

---

### 📅 Day 71–72 — VLA Foundations 🔥🤖📄
- **Paper: "RT-1: Robotics Transformer for Real-World Control" — Brohan et al. 2022** 🔥🤖
- TokenLearner for visual tokens 🔥
- Action tokenization 🔥🤖
- Training data: 130k episodes across 700 tasks
- Generalization analysis — what RT-1 can and cannot do
- Implement a mini RT-1 architecture 📄

### 📅 Day 73–75 — RT-2: Vision-Language-Action 🔥🤖📄
- **Paper: "RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control" — 2023** 🔥🤖
- PaLI-X and PaLM-E as backbone
- Representing actions as text tokens 🔥🤖
- Co-fine-tuning on robot + web data 🔥
- Emergent capabilities from language pretraining 🔥🧠
- Chain-of-thought reasoning for robot tasks ⭐🧠
- The data efficiency question — 17 robots, 130k demos

### 📅 Day 76–77 — OpenVLA — Open Source VLA 🔥🤖📄
- **Paper: "OpenVLA: An Open-Source Vision-Language-Action Model" — 2024** ⭐🔥🤖
- Architecture: Prismatic VLM + action head
- Open X-Embodiment training data ⭐🤖
- Clone repo + run inference locally 📄
- Fine-tune on custom task with 50 demos 📄
- LoRA fine-tuning for efficiency ⭐🤖
- Evaluate generalization + failure modes

### 📅 Day 78–80 — π0 (Pi-Zero) — Flow Matching Policy 🔥🤖📄
- **Paper: "π0: A Vision-Language-Action Flow Model for General Robot Control" — Black et al. 2024** 🔥🤖
- Flow matching as action representation 🔥🤖
- Why flow matching > diffusion for actions ⭐🤖
- Action chunking deep 🔥🤖
- Pre-training on heterogeneous robot data
- Fine-tuning on specific tasks 🔥🤖
- Implement flow matching action head from scratch 📄

### 📅 Day 81–82 — Flow Matching Theory + Implementation 🔥📄
- **Paper: "Flow Matching for Generative Modeling" — Lipman et al. 2022** 🔥
- Continuous normalizing flows
- Conditional flow matching 🔥
- ODE solver for generation
- Why flow matching is more stable than diffusion 🔥
- Implement flow matching from scratch in PyTorch 📄
- Apply to robot action generation ⭐🤖

### 📅 Day 83–84 — Diffusion Policy 🔥🤖📄
- **Paper: "Diffusion Policy: Visuomotor Policy Learning via Action Diffusion" — Chi et al. 2023** 🔥🤖
- DDPM for action generation 🔥🤖
- CNN vs Transformer diffusion policy
- Action horizon + observation horizon 🔥🤖
- Why multi-modal action distributions matter 🔥🤖
- Implement full Diffusion Policy from scratch 📄
- Compare with flow matching approach

### 📅 Day 85–86 — ACT: Action Chunking Transformers 🔥🤖📄
- **Paper: "Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware" — Zhao et al. 2023** 🔥🤖
- Action chunking — predicting sequences of actions 🔥🤖
- CVAE for multi-modal behavior 🔥🤖
- Temporal ensemble for smooth execution 🔥🤖
- ALOHA hardware setup ⭐🤖
- Implement ACT from scratch 📄
- Why ACT is highly data-efficient

### 📅 Day 87–88 — Octo: Generalist Robot Policy 🔥🤖📄
- **Paper: "Octo: An Open-Source Generalist Robot Policy" — 2023** ⭐🔥🤖
- Transformer architecture for multi-modal inputs
- Task conditioning via language + goal images 🔥🤖
- Open X-Embodiment training ⭐🤖
- Fine-tuning Octo on new robot + task 📄
- Cross-embodiment transfer analysis 🤖

### 📅 Day 89–90 — Cross-Embodiment + Open X-Embodiment 🔥🤖
- **Paper: "Open X-Embodiment: Robotic Learning Datasets and RT-X Models" — 2023** 🔥🤖
- 22 robot types, 1M+ episodes
- How to train across diverse morphologies 🔥🤖
- Robot-specific tokenization strategies
- Scaling analysis — does more robot data always help?
- The data flywheel problem ⭐🤖

### 📅 Day 91–92 — Multimodal Models for Robotics 🔥🤖
- **Paper: "PaLM-E: An Embodied Multimodal Language Model" — 2023** 🔥🤖
- Injecting continuous sensor data into LLMs 🔥🤖
- Embodied question answering
- **Paper: "EmbodiedGPT: Vision-Language Pre-Training via Embodied Chain of Thought" — 2023** ⭐
- Chain-of-thought for embodied tasks ⭐🤖🧠
- How language shapes robot planning ⭐🤖

### 📅 Day 93–94 — Fine-tuning VLAs Efficiently 🔥🤖
- LoRA for VLA fine-tuning ⭐🤖
- **Paper: "Efficient Fine-Tuning of Vision-Language-Action Models" (recent)**
- How many demos are needed?
- Data augmentation for robot demos ⭐🤖
- Sim-to-real for VLA fine-tuning ⭐🤖
- Building a demo collection pipeline

### 📅 Day 95 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 4: Fine-tuned VLA for Custom Task 🤖📄
- Take OpenVLA or Octo as base
- Collect 50–100 demonstrations in simulation ⭐🤖
- Fine-tune with LoRA ⭐
- Evaluate: in-distribution + out-of-distribution
- Compare: ACT vs Diffusion Policy vs VLA on same task
- Measure: data efficiency curve
- Publish to HuggingFace Hub ⭐
- Write full technical report

---
---

# 🌐 PHASE 5 — EMBODIED AI RESEARCH FRONTIER (Day 96–120)
### 🎯 Goal: Be at the absolute frontier — read and implement 2024/2025 work

---

### 📅 Day 96–97 — Generalist Agents 🔥🧠🤖
- **Paper: "GATO: A Generalist Agent" — Reed et al. 2022** 🔥🧠🤖
- One network, one set of weights, 600+ tasks 🔥🧠
- Tokenizing everything: text, images, actions, observations
- Context window as working memory 🔥🧠
- Limitations of GATO at current scale 🧠
- What would a truly generalist embodied agent need? 🔥🧠

### 📅 Day 98–99 — Scaling Robot Data 🔥🤖
- **Paper: "DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset" — 2024** ⭐🤖
- Why diversity of environments > number of demos 🔥🤖
- Data collection infrastructure
- Teleoperation systems (ALOHA, UMI, AirExo) ⭐🤖
- **Paper: "Universal Manipulation Interface" — Chi et al. 2024** ⭐🤖
- The data scaling problem for robotics 🔥🤖

### 📅 Day 100–101 — Synthetic Data for Robot Learning 🔥🤖🎮
- **Paper: "RoboGen: Towards Unleashing Infinite Data for Automated Robot Learning" — 2023** ⭐🤖
- LLM-generated tasks + assets + reward functions 🔥🤖
- **Paper: "UniSim: Learning Interactive Real-World Simulators" — 2023** ⭐🤖
- Infinite data from simulation — does it transfer? 🔥🤖
- Automatic data augmentation strategies ⭐🤖🎮
- Isaac Lab for massive parallel data generation ⭐🎮🤖

### 📅 Day 102–103 — LLM + Robot Task Planning 🔥🤖🧠
- **Paper: "Code as Policies: Language Model Programs for Embodied Control" — Liang et al. 2023** 🔥🤖🧠
- LLMs writing executable robot code 🔥🤖
- **Paper: "ProgPrompt: Generating Situated Robot Task Plans" — 2022** ⭐🤖
- **Paper: "Inner Monologue: Embodied Reasoning through Planning with Language Models" — 2022** ⭐🤖
- Closed-loop LLM planning with environment feedback 🔥🤖🧠
- Implement a full LLM → robot executor pipeline 📄⭐🤖

### 📅 Day 104–105 — Visual Foundation Models for Robots 🔥🤖
- **Paper: "DINO v2: Learning Robust Visual Features without Supervision" — 2023** 🔥🤖
- Using DINOv2 features for robot perception 🔥🤖
- **Paper: "Grounded SAM: Assembling Open-World Models" — 2024** ⭐🤖
- Grounding DINO + SAM for open-vocabulary robot perception ⭐🤖
- **Paper: "Track Anything: Segment Anything Meets Videos" — 2023** ⭐🤖
- Building a zero-shot robot perception stack ⭐🤖

### 📅 Day 106–107 — Reward Learning + RLHF for Robots 🔥🤖🧠
- **Paper: "Learning Reward Functions from Diverse Sources" — 2023** ⭐🤖
- VLM as reward model 🔥🤖
- **Paper: "EUREKA: Human-Level Reward Design via Coding Large Language Models" — 2023** ⭐🔥🤖
- GPT-4 writing reward functions for robots 🔥🤖🧠
- Iterative reward refinement from language feedback ⭐🤖
- Implement EUREKA-style reward generation 📄⭐🤖

### 📅 Day 108–109 — Tactile + Multi-Modal Sensing 🔥🤖
- **Paper: "Tactile-RL: Learning Dexterous Manipulation Policies from Tactile Data" — 2024** ⭐🤖
- GelSight, DIGIT tactile sensors 🔥🤖
- **Paper: "AnyTouch: Learning Unified Static-Dynamic Representation" — 2024** ⭐🤖
- Fusing vision + touch + proprioception 🔥🤖
- Why tactile sensing is needed for dexterous manipulation 🤖

### 📅 Day 110–111 — Humanoid Robot Learning 🔥🤖
- **Paper: "Learning Humanoid Locomotion with Transformers" — 2024** ⭐🤖
- **Paper: "OmniH2O: Universal and Dexterous Human-to-Humanoid" — 2024** ⭐🤖
- Whole-body control for humanoids 🔥🤖
- Retargeting human motion to humanoid 🔥🤖
- Isaac Lab for humanoid training ⭐🎮🤖
- Sim-to-real for humanoids ⭐🤖

### 📅 Day 112–113 — 3D Scene Understanding for Manipulation 🔥🤖
- **Paper: "3D-VisTa: Pre-trained Transformer for 3D Vision and Text Alignment" — 2023** ⭐🤖
- **Paper: "SpatialVLM: Endowing Vision-Language Models with Spatial Reasoning" — 2024** ⭐🔥🤖
- 3D spatial reasoning in VLMs 🔥🤖
- Connecting language → 3D scene → robot action 🔥🤖
- Building a 3D-aware robot perception module ⭐🤖

### 📅 Day 114–115 — Continual + Lifelong Robot Learning 🔥🤖🧠
- **Paper: "LIBERO: Benchmarking Knowledge Transfer for Lifelong Robot Learning" — 2023** 🔥🤖🧠
- Catastrophic forgetting in robot policies 🔥🤖🧠
- **Paper: "TAIL: Task-specific Adapter for Imitation Learning" — 2024** ⭐🤖
- Progressive neural networks for continual learning 🔥🤖🧠
- Memory replay for robot policies ⭐🤖🧠

### 📅 Day 116–117 — Evaluation + Benchmarking 🔥🤖
- **Paper: "COLOSSEUM: A Benchmark for Evaluating Generalization" — 2024** ⭐🤖
- What makes a good robot learning benchmark? 🔥🤖
- RLBench, MetaWorld, Calvin benchmarks ⭐🤖
- **Paper: "ARC-Challenge for Embodied AI" (2024 variants)** ⭐🤖
- Designing evaluation that measures real generalization 🔥🤖

### 📅 Day 118–119 — Latest 2024/2025 Work 🔥⭐
- **arXiv cs.RO + cs.LG — spend 2 days reading latest papers**
- Focus: VLAs, world models, dexterous manipulation, humanoids
- Pick 3 papers to implement key ideas from
- Write summaries for all 10 papers you read
- Identify gaps — what is nobody working on? 🔥🧠

### 📅 Day 120 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 5: LLM-Guided Robot with World Model 🤖🧠📄
- LLM generates high-level plan (Code as Policies style) ⭐🤖
- World model (TD-MPC2) evaluates plan feasibility ⭐🤖
- RL policy executes low-level actions ⭐🤖
- Closed-loop: environment feedback → LLM replanning ⭐🤖🧠
- Test on 5 tasks requiring 3+ steps of reasoning
- Measure: success rate, generalization, failure modes
- Full ROS2 integration ⭐🤖
- Write technical report + submit to arXiv

---
---

# 🎓 PHASE 6 — ADVANCED ROBOT LEARNING (Day 121–150)
### 🎯 Goal: Go deep on the hardest open problems in robot learning

---

### 📅 Day 121–122 — Dexterous Manipulation Deep 🔥🤖📄
- **Paper: "Dexterous Manipulation from Images: Autonomous Real-World RL via Substep Guidance" — 2023** ⭐🤖
- **Paper: "AnyDexGrasp: Open-Vocabulary Dexterous Grasping" — 2024** ⭐🤖
- In-hand manipulation — the hardest robot problem 🔥🤖
- Finger gaiting
- Rolling, pivoting, tossing objects
- Why current VLAs struggle with dexterity 🔥🤖

### 📅 Day 123–124 — Bimanual Manipulation 🔥🤖
- **Paper: "ALOHA: Learning Bimanual Mobile Manipulation" — Zhao et al. 2023** 🔥🤖
- Two-arm coordination challenges 🔥🤖
- Leader-follower teleoperation ⭐🤖
- ACT for bimanual tasks ⭐🤖
- **Paper: "Mobile ALOHA: Learning Whole-Body Teleoperation" — 2024** ⭐🤖
- Loco-manipulation learning ⭐🤖

### 📅 Day 125–126 — Deformable Object Manipulation 🔥🤖
- Why deformables are hard — infinite DOF state space 🔥🤖
- Cloth, rope, dough manipulation
- **Paper: "DiffCloth: Differentiable Cloth Simulation" — 2022** ⭐🤖
- **Paper: "Learning to Fold Real Garments with Point Clouds" — 2023** ⭐🤖
- Differentiable simulation for deformables ⭐🤖

### 📅 Day 127–128 — Contact-Rich Tasks + Compliant Control 🔥🤖
- **Paper: "Learning to Slide Unknown Objects with Differentiable Physics" — 2023** ⭐🤖
- Impedance control for contact-rich tasks ⭐🤖
- Force/torque feedback in learned policies 🔥🤖
- **Paper: "Compliant Residual Policy Learning for Contact-Rich Manipulation" — 2024** ⭐🤖
- Residual policy learning on top of classical controller 🔥🤖

### 📅 Day 129–130 — Learning from Videos (No Robot Data) 🔥🤖🧠
- **Paper: "R3M: A Universal Visual Representation for Robot Manipulation" — 2022** 🔥🤖
- Learning from human video — Ego4D, Something-Something ⭐🤖
- **Paper: "Vid2Robot: End-to-end Video-Conditioned Policy Learning" — 2024** ⭐🤖
- **Paper: "UniPi: Learning Universal Policies via Text-Guided Video Generation" — 2023** ⭐🤖
- Video generation as a policy representation 🔥🤖🧠
- The data-efficient learning question 🔥🤖

### 📅 Day 131–132 — Meta-Learning for Robots 🔥🤖🧠
- **Paper: "MAML: Model-Agnostic Meta-Learning" — Finn et al. 2017** 🔥🤖🧠
- Meta-learning for few-shot task adaptation 🔥🤖🧠
- **Paper: "Meta-Learning with Latent Embedding Optimization" — 2019** ⭐🤖
- **Paper: "PEARL: Efficient Off-Policy Meta-Reinforcement Learning" — 2019** ⭐🤖
- Implement MAML from scratch ⭐📄
- Apply to robot arm: learn new object in 5 demos ⭐🤖

### 📅 Day 133–135 — Hierarchical Robot Learning 🔥🤖🧠
- Options framework — temporal abstraction 🔥🤖🧠
- **Paper: "HIRO: Data-Efficient Hierarchical Reinforcement Learning" — 2018** 🔥🤖
- **Paper: "HAC: Learning Multi-Level Hierarchies with Hindsight" — 2019** ⭐🤖
- **Paper: "LOTUS: Continual Imitation Learning for Robot Manipulation" — 2023** ⭐🤖
- Why hierarchical policies are needed for long-horizon tasks 🔥🤖🧠
- Building a 3-level hierarchical policy ⭐🤖📄

### 📅 Day 136–137 — Social + Collaborative Robotics 🤖🧠
- **Paper: "Human-Robot Collaboration: A Survey" — 2023** ⭐🤖
- Theory of mind for robots 🔥🤖🧠
- Predicting human intent 🔥🤖🧠
- **Paper: "ROSE: Grounding Robot Planning in Social and Physical Context" — 2024** ⭐🤖
- Social navigation — respecting human personal space 🤖
- Collaborative assembly tasks 🤖

### 📅 Day 138–140 — Robust + Safe Robot Learning 🔥🤖
- **Paper: "GUARD: A Safe Reinforcement Learning Benchmark" — 2023** 🔥🤖
- Control Barrier Functions (CBF) in learned policies ⭐🤖
- **Paper: "Safe Robot Learning in Assistive Devices" — 2024** ⭐🤖
- Uncertainty quantification in robot policies 🔥🤖
- When to ask for help — confidence-based fallback 🔥🤖
- Safety-critical deployment checklist 🤖

### 📅 Day 141–143 — Multi-Agent Robot Learning 🔥🤖
- **Paper: "Multi-Agent Reinforcement Learning: A Survey" — 2022** 🔥🤖
- Cooperative multi-robot tasks 🔥🤖
- **Paper: "Cooperative Robot Manipulation with Multi-Task Learning" — 2023** ⭐🤖
- Communication in multi-robot systems 🔥🤖
- Decentralized execution with centralized training (CTDE) 🔥🤖
- Implement a 2-robot cooperative manipulation task ⭐🤖📄

### 📅 Day 144–146 — Foundation Models as Robot Brains 🔥🤖🧠
- **Paper: "GPT-4V(ision) for Robotics" — 2024** ⭐🤖🧠
- Multimodal LLMs as zero-shot robot controllers 🔥🤖🧠
- **Paper: "ManipLLM: Embodied Multimodal Large Language Model" — 2024** ⭐🤖
- **Paper: "Towards General-Purpose Robots via Foundation Models" — survey 2023** 🔥🤖🧠
- The convergence of LLMs + robotics 🔥🤖🧠
- What foundation models give robots for free 🔥🤖🧠
- What they still cannot give 🔥🤖🧠

### 📅 Day 147–149 — Advanced Sim-to-Real Techniques 🔥🤖🎮
- **Paper: "RMA: Rapid Motor Adaptation for Legged Robots" — Kumar et al. 2021** 🔥🤖
- Privileged training + adaptation module 🔥🤖
- **Paper: "Extreme Parkour with Legged Robots" — Zhuang et al. 2023** ⭐🤖
- Visual locomotion policies ⭐🤖
- **Paper: "DexMimicGen: Automated Data Generation for Dexterous Manipulation" — 2024** ⭐🤖
- Automated demonstration generation ⭐🤖🎮

### 📅 Day 150 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 6: Hierarchical Multi-Task Robot Policy 🤖📄
- 3-level hierarchy: language goal → subgoal → action 🤖🧠
- Train on 10+ tasks simultaneously ⭐🤖
- Meta-learning for fast adaptation to new task ⭐🤖
- Safety layer + uncertainty estimation ⭐🤖
- Evaluate: generalization to 5 held-out tasks
- Sim-to-real analysis in Isaac Lab ⭐🎮🤖
- Full documentation + video demos

---
---

# 🧠 PHASE 7 — AGI ARCHITECTURE RESEARCH (Day 151–175)
### 🎯 Goal: Think at the level of someone designing the path to AGI

---

### 📅 Day 151–152 — Memory Architectures for AGI 🔥🧠
- **Paper: "Episodic Memory in Lifelong Language Learning" — 2019** ⭐🧠
- **Paper: "Memorizing Transformers" — Wu et al. 2022** 🔥🧠
- External memory + fast retrieval 🔥🧠
- **Paper: "Larimar: Large Language Models with Episodic Memory Control" — 2024** ⭐🧠
- Working memory vs long-term memory in transformers 🔥🧠
- **Paper: "RWKV: Reinventing RNNs for the Transformer Era" — 2023** ⭐🧠
- Recurrent architectures for infinite context 🔥🧠

### 📅 Day 153–154 — State Space Models 🔥🧠
- **Paper: "Mamba: Linear-Time Sequence Modeling with Selective State Spaces" — Gu & Dao 2023** 🔥🧠
- Selective SSM — input-dependent gating 🔥🧠
- Why Mamba could replace transformers for long sequences 🔥🧠
- **Paper: "Mamba-2: Transformers are SSMs" — 2024** ⭐🧠
- Implement Mamba from scratch 📄
- Apply to robot control sequences ⭐🤖🧠

### 📅 Day 155–156 — Reasoning + Planning in Neural Networks 🔥🧠
- **Paper: "Chain-of-Thought Prompting Elicits Reasoning" — Wei et al. 2022** 🔥🧠
- **Paper: "Tree of Thoughts: Deliberate Problem Solving with LLMs" — 2023** 🔥🧠
- **Paper: "Graph of Thoughts: Solving Elaborate Problems with LLMs" — 2023** ⭐🧠
- System 1 vs System 2 thinking in AI 🔥🧠
- **Paper: "Alphazero-like Tree Search Guided by LLMs" — 2024** ⭐🧠
- Deliberate reasoning vs fast pattern matching 🔥🧠

### 📅 Day 157–158 — Causal Reasoning in Neural Networks 🔥🧠
- **Paper: "Causal Representation Learning: Finding the Right Variables" — 2023** 🔥🧠
- **Paper: "Neural Causal Models" — 2022** ⭐🧠
- Intervential data vs observational data 🔥🧠
- Do current LLMs do causal reasoning? 🔥🧠
- **Paper: "CLadder: Assessing Causal Reasoning in Language Models" — 2023** ⭐🧠
- Causal reasoning for robot planning 🔥🤖🧠

### 📅 Day 159–160 — Curiosity + Intrinsic Motivation 🔥🧠🤖
- **Paper: "Curiosity-Driven Exploration by Self-Supervised Prediction" — Pathak et al. 2017** 🔥🧠🤖
- **Paper: "Large-Scale Study of Curiosity-Driven Learning" — 2019** 🔥🧠
- Random Network Distillation (RND) 🔥🧠
- **Paper: "BYOL-Explore: Exploration by Bootstrapping" — 2022** ⭐🧠
- **Paper: "EmbExplore: Curiosity from Embodied Interactions" — 2024** ⭐🤖🧠
- Intrinsic motivation for open-ended learning 🔥🧠🤖
- Implement curiosity-driven robot exploration 📄⭐🤖

### 📅 Day 161–162 — Open-Ended Learning 🔥🧠🤖
- **Paper: "POET: Paired Open-Ended Trailblazer" — Wang et al. 2019** 🔥🧠🤖
- **Paper: "Open-Ended Learning Leads to Generally Capable Agents" — DeepMind 2021** 🔥🧠🤖
- Automatic curriculum generation 🔥🧠🤖
- **Paper: "Voyager: An Open-Ended Embodied Agent with LLMs" — 2023** ⭐🧠🤖
- Self-improving agents in open-ended environments 🔥🧠🤖

### 📅 Day 163–164 — Self-Supervised + Unsupervised Representation Learning 🔥🧠
- **Paper: "Bootstrap Your Own Latent (BYOL)" — Grill et al. 2020** 🔥🧠
- **Paper: "Masked Autoencoders Are Scalable Vision Learners (MAE)" — He et al. 2022** 🔥🧠
- **Paper: "Data2Vec: A General Framework for SSL" — 2022** ⭐🧠
- Learning universal representations without labels 🔥🧠
- SSL for robot perception ⭐🤖🧠
- Implement MAE from scratch 📄

### 📅 Day 165–166 — Neural Architecture Search + AutoML 🔥🧠
- **Paper: "Neural Architecture Search: A Survey" — 2019** 🔥🧠
- DARTS — differentiable NAS 🔥🧠
- **Paper: "EfficientNet: Rethinking Model Scaling for CNNs" — 2019** ⭐🧠
- Automated ML pipeline design
- NAS for edge robot hardware ⭐🤖🎮
- Can we automate architecture design for embodied AI? 🧠

### 📅 Day 167–168 — Emergent Communication + Language 🔥🧠
- **Paper: "Emergent Communication in Multi-Agent Systems" — Mordatch & Abbeel 2018** 🔥🧠
- Can language emerge from interaction? 🔥🧠
- **Paper: "Grounded Language Learning Fast and Slow" — Hill et al. 2021** ⭐🧠
- **Paper: "Language Grounding to Vision, World, and Action" — survey 2022** 🔥🧠🤖
- The grounding problem — fundamental for AGI 🔥🧠

### 📅 Day 169–170 — Intelligence + Compression + Prediction 🔥🧠
- **Paper: "Predictive Coding as a Unified Theory of Learning" — Millidge et al. 2022** 🔥🧠
- Intelligence as optimal prediction 🔥🧠
- **Paper: "Contrastive Predictive Coding" — Oord et al. 2018** 🔥🧠
- Self-supervised learning as predictive coding 🔥🧠
- **Paper: "Towards a Theory of Sequence to Sequence Learning" — 2024** ⭐🧠
- Kolmogorov complexity and generalisation 🔥🧠

### 📅 Day 171–172 — Multimodal Foundation Models 🔥🧠🤖
- **Paper: "GPT-4 Technical Report — 2023"** 🔥🧠
- **Paper: "Gemini: A Family of Highly Capable Multimodal Models" — 2023** ⭐🧠
- **Paper: "Claude's Model Specification" — Anthropic** ⭐🧠
- What multimodal scaling is revealing 🔥🧠
- Remaining gaps toward AGI in current foundation models 🔥🧠
- Form your own research agenda 🧠

### 📅 Day 173–174 — The AGI Debate 🧠
- **Post: "The Bitter Lesson" — Rich Sutton 2019** 🔥🧠
- **Post: "A Very Short History of Some Times We Figured Out AI" — François Chollet** ⭐🧠
- **Paper: "On the Measure of Intelligence" — Chollet 2019** 🔥🧠
- ARC (Abstraction and Reasoning Corpus) 🔥🧠
- What current systems still fail at 🔥🧠
- Is scaling sufficient or do we need new ideas? 🧠
- Write your own 5-page research position paper 🧠

### 📅 Day 175 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 7: Curiosity-Driven Embodied Agent 🤖🧠📄
- Implement RND + ICM curiosity in Isaac Lab ⭐🎮🤖
- Open-ended exploration without task reward ⭐🤖🧠
- Automatic skill discovery 🔥🤖🧠
- Downstream: use discovered skills for task learning ⭐🤖
- Measure: coverage, skill diversity, downstream transfer
- Compare with reward-only baseline
- Submit to arXiv as a short paper ⭐🧠

---
---

# 🌉 PHASE 8 — SIM-TO-REAL + SCALING ROBOT DATA (Day 176–195)
### 🎯 Goal: Solve the hardest practical problems in deploying learned robot policies

---

### 📅 Day 176–177 — The Sim-to-Real Gap: Full Analysis 🔥🤖
- **Paper: "Sim-to-Real Transfer in Deep Reinforcement Learning for Robotics: A Survey" — 2021** 🔥🤖
- Dynamics gap: contact, friction, actuation 🔥🤖
- Visual gap: textures, lighting, shadows 🔥🤖
- Sensor gap: noise, latency, calibration 🔥🤖
- Measurement protocol — quantifying your gap ⭐🤖
- Design a sim-to-real evaluation framework 📄

### 📅 Day 178–179 — Advanced Domain Randomization 🔥🤖🎮
- **Paper: "Learning Dexterous In-Hand Manipulation" — OpenAI Dactyl 2019** 🔥🤖
- Automatic Domain Randomization (ADR) deep 🔥🤖
- **Paper: "Active Domain Randomization" — 2019** ⭐🤖
- Curriculum over randomization range 🔥🤖
- Visual DR: photorealistic rendering vs randomization ⭐🤖🎮
- Isaac Lab randomization API deep ⭐🎮🤖
- Build ADR system from scratch 📄⭐🎮🤖

### 📅 Day 180–181 — System Identification for Real Robots 🔥🤖
- **Paper: "Online System Identification for Sim-to-Real Transfer" — 2023** ⭐🤖
- Bayesian system identification 🔥🤖
- **Paper: "RMA: Rapid Motor Adaptation" — full implementation** ⭐🔥🤖
- Online adaptation from proprioceptive history 🔥🤖
- Building an adaptation module for your robot ⭐🤖📄

### 📅 Day 182–183 — Photo-Realistic Simulation 🔥🤖🎮
- **Paper: "Habitat 2.0: Training Home Assistants to Rearrange" — 2021** ⭐🤖
- NVIDIA Isaac Sim — photo-realistic rendering ⭐🎮🤖
- **Paper: "PhysicallyRealistic Simulation for Robot Learning" — 2024** ⭐🤖🎮
- Domain gap: photorealistic sim vs real world 🔥🤖
- Neural rendering for sim-to-real ⭐🤖
- 3DGS as robot training environment ⭐🤖

### 📅 Day 184–185 — Teleoperation + Data Collection Infrastructure 🔥🤖
- Building a teleoperation system 🔥🤖
- **Paper: "GELLO: A General, Low-Cost, and Intuitive Teleoperation Framework" — 2023** ⭐🤖
- **Paper: "AirExo: Low-Cost Exoskeletons for Learning" — 2024** ⭐🤖
- Data quality vs data quantity tradeoffs 🔥🤖
- Automatic quality filtering for demonstrations ⭐🤖
- Data augmentation pipelines for robot demos ⭐🤖

### 📅 Day 186–187 — Scaling Laws for Robot Learning 🔥🤖🧠
- **Paper: "Scaling Robot Learning with Semantically Imagined Experience" — 2023** ⭐🤖
- Does scaling data always help? 🔥🤖🧠
- **Paper: "What Matters in Learning from Offline Human Demonstrations" — 2021** 🔥🤖
- Data diversity vs quantity 🔥🤖
- Compute-optimal robot learning ⭐🤖🧠
- Write your own scaling analysis 📄🤖

### 📅 Day 188–189 — Real Hardware Deployment Pipeline 🔥🤖
- End-to-end deployment pipeline: sim → real 🔥🤖
- Safety wrappers + emergency stop systems 🔥🤖
- Latency analysis: perception → policy → action 🔥🤖⭐🎮
- Observation + action filtering for smooth control 🔥🤖
- Failure detection + recovery 🔥🤖
- Logging + debugging on real hardware 🤖
- Build a production-grade deployment framework 📄⭐🤖

### 📅 Day 190–191 — Sim-to-Real for Perception 🔥🤖
- Visual domain adaptation 🔥🤖
- **Paper: "Sim-to-Real via Sim-to-Seg" — 2022** ⭐🤖
- **Paper: "DragonFly: Sim-to-Real Transfer for Agile Flight" — 2024** ⭐🤖
- Point cloud sim-to-real gap 🔥🤖
- Tackling the perception gap separately from the dynamics gap ⭐🤖

### 📅 Day 192–193 — Continuous Improvement from Deployment 🔥🤖🧠
- **Paper: "DAGGER: A Reduction of Imitation Learning to Online Learning" — Ross et al. 2011** 🔥🤖
- Online learning from deployment failures 🔥🤖🧠
- **Paper: "Robot Learning on the Job: Human-in-the-Loop Autonomy" — 2023** ⭐🤖
- Active learning for robot correction ⭐🤖🧠
- Building a data flywheel: deploy → fail → collect → retrain 🔥🤖🧠

### 📅 Day 194 — Full Sim-to-Real Pipeline Implementation 🔥🤖🎮📄
- Isaac Lab → real robot full pipeline
- ADR + RMA + deployment wrapper
- Measure sim vs real performance gap
- Iterative improvement loop

### 📅 Day 195 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 8: Production Sim-to-Real System 🤖🎮📄
- Isaac Lab parallel training (4096+ envs) ⭐🎮🤖
- Full ADR pipeline 🔥🤖
- RMA adaptation module ⭐🤖
- Photo-realistic rendering for visual policy ⭐🤖🎮
- Deploy to real/simulated robot with safety wrapper ⭐🤖
- Continuous improvement loop: deploy → collect → retrain ⭐🤖
- Full benchmark: sim vs real performance
- Open-source release + technical report

---
---

# 🔬 PHASE 9 — ORIGINAL RESEARCH + PAPER IMPLEMENTATION (Day 196–220)
### 🎯 Goal: Transition from consumer of research to producer of research

---

### 📅 Day 196–197 — How to Do Research 🔥
- **Essay: "You and Your Research" — Richard Hamming** 🔥
- **Essay: "How to Have a Bad Career in Research" — David Patterson** ⭐
- **Post: "Principles of Effective Research" — Michael Nielsen** ⭐
- Finding important open problems 🔥
- The difference between hard and important 🔥
- Building a research taste
- Keeping a research journal — start today 🔥

### 📅 Day 198–199 — How to Write Research Papers 🔥
- **Book: "Writing for Computer Science" — Zobel (key chapters)**
- Structure of a good ML paper
- Writing related work without being encyclopedic 🔥
- Ablation studies — why they matter 🔥
- How to design experiments that prove your point
- Reviewers' perspective — what makes papers get rejected 🔥

### 📅 Day 200–203 — Implement 2 Classic Papers Fully 🔥📄
- **Paper 1: DreamerV3** — implement every detail from scratch 📄
  - RSSM, actor-critic, replay buffer, training loop
  - Match the paper's benchmark results within 10%
  - Document every implementation decision

- **Paper 2: Diffusion Policy** — full implementation 📄
  - CNN + Transformer variants
  - Full training + evaluation pipeline
  - Match reported results on Push-T / robomimic

### 📅 Day 204–206 — Implement 2 Recent Papers 🔥📄⭐
- **Paper 3: TD-MPC2** — full implementation 📄
  - World model + MPC planner
  - Apply to 3 robot tasks
  - Profile + optimize with CUDA ⭐🎮

- **Paper 4: Pick one 2024 paper from your reading** 📄
  - Your choice — something you want to extend
  - Understand every equation
  - Find and fix at least one weakness

### 📅 Day 207–209 — Identify Your Research Question 🔥🧠
- Based on all your reading: what is one thing nobody has solved?
- Frame it as: "We observe X. We hypothesize Y. We will test by Z."
- Write a 2-page research proposal
- Get feedback (online communities, Discord, Twitter/X ML community)
- Refine until it is specific enough to execute in 2–3 weeks 🔥

### 📅 Day 210–215 — Execute Your First Original Experiment 🔥📄
- Implement your hypothesis as cleanly as possible
- Baseline: existing method
- Your method: your hypothesis implemented
- Ablations: prove each component matters 🔥
- Negative results count — document honestly 🔥
- 3 seeds minimum, statistical testing
- Visualizations that tell the story clearly

### 📅 Day 216–218 — Write It Up + Submit 🔥
- Write the paper: intro, related work, method, experiments, conclusion
- Internal review — be your own harshest critic
- Submit to: arXiv (immediately) + workshop at CoRL / ICRA / NeurIPS
- Workshops are achievable for first papers 🔥
- Get reviews — good or bad, they make you better

### 📅 Day 219 — Build Your Research Identity 🔥
- GitHub: all implementations clean + documented
- arXiv: your paper public
- Twitter/X: share your work and follow the field
- Personal website: projects + papers + writing
- Engage with other researchers — comment on papers
- The research community is small and collegial 🔥

### 📅 Day 220 🔁 — REVISION + REFLECTION

### 🛠️ PROJECT 9: Your First Published Research 📄🔥
- Original contribution to embodied AI or world models
- Full experimental validation
- Submitted to arXiv
- Submitted to a workshop at CoRL, ICRA, NeurIPS, or ICLR
- Code public on GitHub with full README
- Demo video

---
---

# 🏆 PHASE 10 — CAPSTONE PROJECTS + PUBLISHING (Day 221–240)
### 🎯 Goal: Build the 3 projects that define your research identity

---

### 🛠️ PROJECT 10: End-to-End Embodied AI System (Day 221–225) 🤖🧠🎮
**"A General-Purpose Robot Brain"**

**Architecture:**
- Perception: DINOv2 + Grounded SAM + 3D point cloud ⭐🤖
- World Model: DreamerV3 / TD-MPC2 ⭐🤖
- Language: LLM for task decomposition ⭐🧠🤖
- Policy: Diffusion Policy / Flow Matching ⭐🤖
- Memory: Episodic memory for task history ⭐🧠
- All running in ROS2 ⭐🤖

**Capabilities:**
- Understand natural language instructions ⭐🤖🧠
- Plan multi-step tasks using world model ⭐🤖
- Execute with diffusion policy ⭐🤖
- Recover from failures autonomously ⭐🤖
- Learn from corrections ⭐🤖🧠
- Generalize to unseen objects ⭐🤖

**Infrastructure:**
- Custom CUDA kernels for real-time inference ⭐🎮
- TensorRT deployment on Jetson ⭐🎮🤖
- Full ROS2 integration ⭐🤖
- Comprehensive logging + visualization ⭐

---

### 🛠️ PROJECT 11: World Model Research Contribution (Day 226–230) 🧠🎮📄
**"Efficient Real-Time World Models for Robot Control"**

**Research Question:**
Can we build a world model that runs at 100Hz on embedded hardware while maintaining sufficient predictive accuracy for dexterous manipulation?

**Your Contribution:**
- Distilled world model (teacher: DreamerV3, student: fast MLP) 📄
- Custom Triton kernels for RSSM inference ⭐🎮
- Benchmark: accuracy vs latency vs memory tradeoff
- Evaluate on 5 manipulation tasks
- Deploy on NVIDIA Jetson ⭐🎮🤖
- arXiv paper + CoRL/ICRA submission ⭐

---

### 🛠️ PROJECT 12: Open-Source Embodied AI Toolkit (Day 231–235) 🤖🧠🎮
**Publish a tool the community will actually use**

**Contents:**
- VLA fine-tuning toolkit (OpenVLA + Octo + your additions) ⭐🤖
- World model library (DreamerV3 + TD-MPC2 + your variant) ⭐🤖
- Isaac Lab environments (your custom tasks) ⭐🎮🤖
- Sim-to-real pipeline (ADR + RMA + deployment) ⭐🤖
- Evaluation suite (your benchmark from Project 2) ⭐

**Quality bar:**
- pip installable
- Full documentation
- Tutorial notebooks
- CI/CD with GitHub Actions ⭐
- HuggingFace Hub integration ⭐

---

### 🛠️ PROJECT 13: Research Portfolio + Career Materials (Day 236–240)

**GitHub:**
- All 12 projects clean, documented, with demo videos
- Pinned: your best 4 projects
- Contribution graph: consistent + active

**arXiv:**
- 1–2 papers published
- Clean, professional writing
- Clear contributions

**Personal Website:**
- Projects with videos + write-ups
- Research interests + vision
- Contact + links

**Writing:**
- 5–10 technical blog posts on key topics you've learned
- These demonstrate depth to potential collaborators + employers

**The Pitch:**
- 1-paragraph research vision statement
- What you want to build in 5 years
- What you believe about the path to embodied AGI

---
---

# 📚 ESSENTIAL READING LIST

## Books (Read in Order)
| Book | Phase | Priority |
|---|---|---|
| "Theoretical Neuroscience" — Dayan & Abbott | 1 | 🔥 |
| "The Brain from Inside Out" — Buzsáki | 1 | 🔥 |
| "Surfing Uncertainty" — Andy Clark | 1 | 🔥 |
| "The Embodied Mind" — Varela et al. | 1 | 🔥 |
| "How the Mind Works" — Pinker | 1 | 🔥 |
| "The Book of Why" — Pearl (Ch 1–5) | 2 | 🔥 |
| "Probabilistic Machine Learning: Advanced Topics" — Murphy | 3–5 | 🔥 |
| "Reinforcement Learning" — Sutton & Barto (Ch 13–17) | 6 | 🔥 |
| "An Intro to Kolmogorov Complexity" — Li & Vitanyi (Ch 1–3) | 2 | 🧠 |
| "Writing for Computer Science" — Zobel | 9 | 🔥 |

## Must-Read Papers (Chronological)
| Paper | Year | Phase |
|---|---|---|
| "Neuroscience-Inspired AI" — Hassabis et al. | 2017 | 1 |
| "Building Machines That Learn Like People" — Lake et al. | 2017 | 2 |
| "World Models" — Ha & Schmidhuber | 2018 | 3 |
| "MAML" — Finn et al. | 2017 | 6 |
| "Reward is Enough" — Silver et al. | 2021 | 2 |
| "DreamerV3" — Hafner et al. | 2023 | 3 |
| "A Path Towards Autonomous Machine Intelligence" — LeCun | 2022 | 2 |
| "RT-2" — Google DeepMind | 2023 | 4 |
| "Diffusion Policy" — Chi et al. | 2023 | 4 |
| "ACT / ALOHA" — Zhao et al. | 2023 | 4 |
| "π0" — Physical Intelligence | 2024 | 4 |
| "OpenVLA" | 2024 | 4 |
| "EUREKA" — NVIDIA | 2023 | 5 |
| "Code as Policies" — Liang et al. | 2023 | 5 |
| "On the Measure of Intelligence" — Chollet | 2019 | 7 |
| "The Bitter Lesson" — Sutton | 2019 | 7 |
| "Mamba" — Gu & Dao | 2023 | 7 |
| "RMA" — Kumar et al. | 2021 | 8 |

## Blogs + Resources (Follow Weekly)
| Resource | What For |
|---|---|
| arXiv cs.RO (daily) | Latest robotics papers |
| arXiv cs.LG (weekly) | Latest ML papers |
| Lilian Weng's blog (lilianweng.github.io) | Deep technical surveys |
| Andrej Karpathy's blog | Systems + ML thinking |
| The Gradient (thegradient.pub) | Accessible research coverage |
| Papers With Code | Implementations + benchmarks |
| CoRL / ICRA / NeurIPS proceedings | Conference papers |
| ETH Zurich RSL YouTube | Legged robotics research |
| Physical Intelligence blog | Latest VLA + π0 updates |

---
---

# 🗺️ WEEKLY HABIT (Every Single Week)

```
Monday    → Read 2 new papers from arXiv (cs.RO + cs.LG)
Tuesday   → Implement one key idea from last week's reading
Wednesday → Work on current phase project
Thursday  → Write: blog post / research note / paper section
Friday    → Review: what did I learn, what confused me, what's next
Saturday  → Deep work: hardest implementation of the week
Sunday    → Light reading: books, longer essays, theory
```

---

# 📊 WHAT SUCCESS LOOKS LIKE

| Milestone | When |
|---|---|
| Can explain any major world model architecture | After Phase 3 |
| Can fine-tune a VLA on a custom task | After Phase 4 |
| Reads and implements a paper in 3 days | After Phase 5 |
| Has a working embodied agent with language control | After Phase 5 |
| Can train sim-to-real locomotion/manipulation policy | After Phase 8 |
| Has submitted first arXiv paper | After Phase 9 |
| Has open-source toolkit with GitHub stars | After Phase 10 |
| Can have a peer discussion with PhD researchers | After Phase 10 |

---

# ✅ END GOAL — After 240 Days You Can:

- Implement any world model architecture from a paper in < 1 week
- Fine-tune and deploy VLA models for novel robot tasks
- Design sim-to-real pipelines for dexterous manipulation
- Write and submit original research to top robotics conferences
- Build production-grade embodied AI systems (perception → planning → control)
- Discuss the theoretical foundations of AGI with depth and nuance
- Have a published arXiv paper and an open-source toolkit others use
- Apply for: PhD programs (top ML/robotics labs), Research Scientist at Physical Intelligence / DeepMind / NVIDIA Robotics / Boston Dynamics AI
