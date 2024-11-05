# 🌐 Wikipedia Game Solver

**Project Overview:**  
The Wikipedia Game Solver is designed to tackle the challenge of reaching a target Wikipedia page from a starting page using only internal links. With two main metrics—distance and time—this project focuses on optimizing distance by evaluating various search algorithms in a high-complexity environment.

---

## 🛠️ Project Details

- **Technologies:**

  - **Programming Language:** Python
  - **API:** Wikipedia API
  - **Algorithms:** BFS, DFS, A\*, GBFS
  - **Heuristics for A\* and GBFS:** Cosine similarity using word vectors

- **Concepts:**
  - **Good Old-Fashioned AI (GOFAI):** Applied classic search algorithms to examine their efficiency within Wikipedia’s vast structure.
  - **Complexity Analysis:** Explored worst-case scenarios in algorithm performance, considering Wikipedia’s depth and scale.

---

## 🔍 Approach

- **Link Retrieval:**

  - Used the Wikipedia API to retrieve links dynamically, simulating a real-world scenario without relying on pre-built databases of Wikipedia links.

- **Search Techniques:**
  - **BFS and DFS:** Provided foundational benchmarks, performing poorly due to exhaustive link exploration.
  - **A\* and GBFS:** Employed cosine similarity heuristics to estimate link relevance, with GBFS proving to be faster and more effective in most cases.

### Key Observations:

- **A\* Performance:**
  - Although designed to find optimal paths, A\* closely resembled BFS in terms of performance when handling large node trees, resulting in high time complexity in this context. This is due to cosine similarity potentially being inaccurate, along with so many nodes having extremely similar heuristics.
- **GBFS Efficiency:**
  - GBFS outperformed other algorithms in terms of time, providing quicker solutions without full optimality but maintaining reasonable accuracy for practical application.

---

## 📈 Results and Learnings

Testing confirmed that while BFS and DFS struggled with scalability, GBFS offered a balance between speed and effectiveness, with A\* hindered by its heuristic’s limitations under massive node branching. This insight underscores the importance of algorithm selection in real-world applications with exponential growth in search depth, like Wikipedia’s link structure.

---
