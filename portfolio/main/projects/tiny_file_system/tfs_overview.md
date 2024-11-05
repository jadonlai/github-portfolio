# 🗂 Tiny File System

**Project Overview:**  
The Tiny File System is a Unix-mountable, minimalist file system created from scratch in C. Designed for simplicity, it operates as a flattened file structure, with all files and folders stored at the same level. This project showcases a deep understanding of file system structures, block management, and error handling.

---

## 🛠️ Project Details

- **Programming Language:** C
- **File System Structure:** Flattened (Single-Level Directory Structure)

---

## ⚙️ Key Features and Architecture

- **Disk and Block Management:**
  - **Disk Library:** Manages a linked list of currently open disks.
  - **Block Structure:** Each disk is divided into 256-byte blocks organized in a linked list, with four main block types:
    - **Super Block:** Stores core file system metadata.
    - **Inode Block:** Holds file descriptors, inode information, and read-write permissions.
    - **File Extent Block:** Contains actual file data and pointers.
    - **Free Block:** Manages free space within the file system.
- **File System Operations:**
  - Supports timestamps, read-only and write-byte permissions, fragmentation info, defragmentation, directory listing, and file renaming.
  - Custom error codes enhance usability and readability, ensuring smooth operation across various file system interactions.

---

## 🚧 Future Development Opportunities

While the Tiny File System is not actively in development, several potential improvements could expand its functionality, including:

- **Hierarchical Directory Support** for multi-level file organization.
- **Content-Based Addressing** to optimize data retrieval.
- **Full-Disk Encryption** for enhanced data security.

---

This project highlights a foundational approach to file system design, with emphasis on functionality, modularity, and clarity, making it a practical learning experience in low-level system programming.
