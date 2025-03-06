
        document.querySelectorAll('.skill-progress').forEach(progress => {
            const width = progress.style.width;
            progress.style.width = '0';
            setTimeout(() => progress.style.width = width, 500);
        });
        printBtn.onclick = () => window.print();
        document.body.appendChild(printBtn);