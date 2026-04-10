import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import DOMParser from "./DOMParser";

interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

const RSSFeed = () => {
  const [items, setItems] = useState<RSSItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        // URL do RSS da Agência Sebrae
        const rssUrl = 'https://agenciasebrae.com.br/feed/';
        
        console.log('Tentando carregar RSS:', rssUrl);
        
        // Tentar diferentes proxies
        const proxies = [
          `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`,
          `https://corsproxy.io/?${encodeURIComponent(rssUrl)}`,
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`
        ];
        
        let response;
        let text;
        let useJsonApi = false;
        
        for (const proxy of proxies) {
          try {
            console.log('Tentando proxy:', proxy);
            response = await fetch(proxy);
            if (response.ok) {
              text = await response.text();
              console.log('Resposta recebida:', text.substring(0, 200));
              
              // Verificar se é JSON (rss2json)
              if (text.trim().startsWith('{')) {
                useJsonApi = true;
              }
              break;
            }
          } catch (e) {
            console.log('Proxy falhou:', proxy, e);
            continue;
          }
        }
        
        if (!response || !response.ok) {
          throw new Error('Todos os proxies falharam');
        }
        
        let items: RSSItem[] = [];
        
        if (useJsonApi) {
          // Usando RSS2JSON API
          const data = JSON.parse(text);
          if (data.items) {
            console.log('RSS2JSON encontrou', data.items.length, 'itens');
            items = data.items.slice(0, 6).map((item: any) => ({
              title: item.title || '',
              link: item.link || '',
              pubDate: item.pubDate || '',
              description: item.description || ''
            }));
          }
        } else {
          // Parse do RSS XML
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(text, "text/xml");
          
          const newsItems = xmlDoc.getElementsByTagName('item');
          console.log('Encontrados', newsItems.length, 'itens no RSS');
          
          for (let i = 0; i < Math.min(6, newsItems.length); i++) {
            const item = newsItems[i];
            const title = item.getElementsByTagName('title')[0]?.textContent || '';
            const link = item.getElementsByTagName('link')[0]?.textContent || '';
            const pubDate = item.getElementsByTagName('pubDate')[0]?.textContent || '';
            const description = item.getElementsByTagName('description')[0]?.textContent || '';
            
            items.push({
              title,
              link,
              pubDate,
              description: description.replace(/<[^>]*>/g, '') // Remove HTML tags
            });
          }
        }
        
        console.log('Items parseados:', items.length);
        setItems(items);
      } catch (error) {
        console.error('Erro ao carregar RSS:', error);
        // Adicionar dados de teste para debug
        setItems([
          {
            title: 'Feira Brasil na Mesa destaca riqueza e diversidade alimentar produzida por pequenos agricultores',
            link: 'https://agenciasebrae.com.br/cultura-empreendedora/feira-brasil-na-mesa-destaca-riqueza-e-diversidade-alimentar-produzida-por-pequenos-agricultores/',
            pubDate: 'Fri, 10 Apr 2026 17:23:49 +0000',
            description: 'A riqueza e a diversidade alimentar brasileira produzida, principalmente, pelas mãos da agricultura familiar, de pequenos e médios produtores, de povos e comunidades tradicionais será o foco da Feira Brasil na Mesa.'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchRSS();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  return (
    <section className="relative px-6 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-wine/5 via-transparent to-hub-green/5" />
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl mb-4">
            Notícias do Ramo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro das últimas tendências e novidades do mundo empresarial com conteúdo da Agência Sebrae
          </p>
        </motion.div>
        
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-4 border-wine/20 border-t-wine animate-spin mb-6"></div>
            <p className="text-muted-foreground">Carregando notícias...</p>
          </motion.div>
        ) : items.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-background/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-wine/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-wine to-hub-green rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-wine transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                    <p className="text-xs text-muted-foreground">
                      {formatDate(item.pubDate)}
                    </p>
                    
                    <motion.a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-wine hover:text-wine/80 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      Ler mais
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground">Nenhuma notícia encontrada no momento.</p>
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://agenciasebrae.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ background: "var(--gradient-wine)" }}
          >
            Ver todas as notícias
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RSSFeed;
