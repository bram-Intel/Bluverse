      </main>
      
      <!-- CONSOLE FOOTER -->
      <footer class="console-footer">
        <div class="console-footer-left">
          <span class="footer-copyright">&copy; {$date_year} Bulverse Cloud Infrastructure Ltd.</span>
          <span class="footer-dot-sep">&bull;</span>
          <span class="footer-sla">99.9% Cloud SLA Guarantee</span>
        </div>
        <div class="console-footer-right">
          <div class="footer-status-badge">
            <span class="status-pulse-dot"></span>
            <span>All Systems Operational</span>
          </div>
          <a href="https://bulverse.cloud" target="_blank" class="footer-brand-link">bulverse.cloud ↗</a>
        </div>
      </footer>
    </div>
  </div>

  <div id="fullpage-overlay" class="w-hidden">
    <div class="outer-wrapper">
      <div class="inner-wrapper">
        <img src="{$WEB_ROOT}/assets/img/overlay-spinner.svg" alt="">
        <br>
        <span class="msg"></span>
      </div>
    </div>
  </div>

  <div class="modal system-modal fade" id="modalAjax" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"></h5>
          <button type="button" class="close" data-dismiss="modal">
            <span aria-hidden="true">&times;</span>
            <span class="sr-only">Close</span>
          </button>
        </div>
        <div class="modal-body">Loading...</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary modal-submit">Submit</button>
        </div>
      </div>
    </div>
  </div>

  {$footeroutput}

  <script>
    function toggleConsoleSidebar() {
      var sb = document.getElementById('consoleSidebar');
      var backdrop = document.getElementById('sidebarBackdrop');
      if (sb) {
        sb.classList.toggle('sidebar-open');
      }
      if (backdrop) {
        backdrop.classList.toggle('active');
      }
    }

    // Ctrl + E keyboard shortcut for Quick Deploy
    document.addEventListener('keydown', function(e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'e') {
        e.preventDefault();
        window.location.href = '{$WEB_ROOT}/cart.php';
      }
    });

    // Client-side live filter for instances table
    function filterInstancesTable() {
      var input = document.getElementById('instanceSearchInput');
      if (!input) return;
      var filter = input.value.toLowerCase();
      var rows = document.querySelectorAll('.instances-table tbody tr');
      rows.forEach(function(row) {
        var text = row.textContent.toLowerCase();
        row.style.display = text.indexOf(filter) > -1 ? '' : 'none';
      });
    }

    function copyToClipboard(text, btnElement) {
      navigator.clipboard.writeText(text).then(function() {
        var original = btnElement.innerHTML;
        btnElement.innerHTML = '<span style="color:#10B981;">Copied!</span>';
        setTimeout(function() {
          btnElement.innerHTML = original;
        }, 1500);
      });
    }
  </script>
</body>
</html>
